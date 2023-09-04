'use strict;'
const express = require("express");
const db = require('../config/dbcon')
const route = express.Router();
const public_routes = require("./public.routes");
const bcrypt = require("bcryptjs")
const session = require('express-session')
const MysqlStore = require('express-mysql-session')(session)
const moment = require('moment')
const index = "index";
const index_without_nav = "index-without-nav";
const index_error = "index-error";

const classes = [
  "ITE 100 A",
  "ITE 100 B",
  "ITE 100 C",
  "ITE 100 D",
  "ITE 100 E",
  "ITE 100 F",
  "ITE 100 G",
  "ITE 100 H",
  "ITE 200 A",
  "ITE 200 B",
  "ITE 200 C",
  "ITE 200 D",
  "ITE 200 E",
  "ITE 200 F",
  "ITE 300 A",
  "ITE 300 B",
  "ITE 300 C",
  "ITE 300 D",
  "ITE 300 E",
  "ITE 300 F",
  "ITE 400 A",
  "ITE 400 B",
  "ITE 400 C",
  "ITE 400 D",
  "ITE 400 E",
  "ITE 400 F",
]

const courses = [
  "ITC 111",
  "ITC 112",
  "ITC 113",
  "ITC 114",
  "ITC 115",
  "ITC 116",
  "ITC 117",
  "ITC 118",
  "ITC 211",
  "ITC 212",
  "ITC 213",
  "ITC 214",
  "ITC 215",
  "ITC 216",
  "ITC 311",
  "ITC 312",
  "ITC 313",
  "ITC 314",
  "ITC 315",
  "ITC 316",
  "ITC 411",
  "ITC 412",
  "ITC 413",
  "ITC 414",
  "ITC 415",
  "ITC 416",
]
// // ========================================
// const sessionStore = new MysqlStore({
//   host: process.env.HOSTNAME,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   clearExpired: true,
//   checkExpirationInterval: 900000,
//   expiration: 86400000
// })
// route.use(session({
//   name: 'overtimeSession',
//   secret: "overtime1234",
//   resave: false,
//   saveUninitialized: false,
//   store: sessionStore
// }))

// // Optionally use onReady() to get a promise that resolves when store is ready.
// sessionStore.onReady().then(() => {
// 	// MySQL session store ready for use.
// 	console.log('MySQLStore ready');
// }).catch(error => {
// 	// Something went wrong.
// 	console.error(error);
// });

// ========================================
const isAuth = (req, res, next) => {
  try {
    if (req.session.isAuth && (req.session.user.nic != null || req.session.user.nic != undefined)) {
      const sql = 'SELECT * FROM users WHERE nic=?'
      db.query(sql, req.session.user.nic, async (err, result) => {
        if (err) {
          res.redirect(public_routes.login)
          return
        };
        if (!result[0]) {
          res.redirect(public_routes.login)
          return
        };
        const user = result[0];
        req.session.isAuth = true;
        req.session.authorization = user?.role;
        req.session.user = user;
        res.locals.user = user;
        res.locals.role = user?.role;
        next();
      })
    } else {
      res.redirect(public_routes.login)
    }
  } catch (error) {
    console.error(error);
    res.redirect(public_routes.login)
  }
}

// =======================================

// ========================================
route.use(function (req, res, next) {
  let url_replace_options = req.url.replace("?", "").replace("/", "");
  let routes = {};
  for (var key in public_routes) {
    routes[key] = public_routes[key].replace("/", "");
  }
  res.locals.routes = routes;
  res.locals.active_path = url_replace_options;
  next();
});

/* < Auth > */
route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Login",
    layout: index_without_nav,
    page_path: "login",
  });
});

route.get(public_routes.logout, (req, res, next) => {
  req.session.destroy(error => {
    if (error) {
      console.log(error);
    }
    else {
      res.clearCookie('overtimeSession')
      res.redirect(public_routes.login)
    }
  })
});

route.post(public_routes.login, (req, res, next) => {
  const { email, password } = req.body
  try {
    if (!email && !password) throw ("Empty Fields")
    const sql = 'SELECT * FROM users WHERE email=?'
    db.query(sql, email, async (err, result) => {
      if (err) {
        res.status(401)
        res.json({ message: "Error Occured", err })
        return
      };
      if (!result[0]) {
        res.status(401)
        res.json({ message: "User Dont Exist" });
        return
      };
      const user = result[0];
      const passHash = user?.password;
      const verify = await bcrypt.compare(password, passHash)
      if (verify) {
        req.session.isAuth = true;
        req.session.authorization = user?.role;
        console.log(user?.role);
        req.session.user = user;
        if(user?.role==='class_rep'){
          res.redirect(public_routes.lesson)
        }else {
          res.redirect(public_routes.admin_dashboard);
        }
      } else {
        res.status(401)
        res.json({ message: "Invalid Login" })
      }
    })
  } catch (error) {
    console.log(error);
    res.status(401)
    res.json({ message: "Unknown Error", error })
  }
});

route.get(public_routes.register, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Register",
    layout: index_without_nav,
    page_path: "register",
  });
});

route.get(public_routes.forgot_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Forgot-password",
    layout: index_without_nav,
    page_path: "forgot-password",
  });
});

route.get(public_routes.blank_page, (req, res, next) => {
  res.render(index, {
    title: "Blank-page",
    page_path: "blank-page/blank-page",
  });
});

// ---------------( Main menu ) -------------------

route.get(public_routes.admin_dashboard, isAuth, (req, res, next) => {
  res.render(index, {
    title: "Dashboard",
    page_path: "dashboard/admin",
    user: req.session.user,
  });
});

route.post(public_routes.register, isAuth, async (req, res, next) => {
  const { nic, name, designation, department, telephone, email, password, role, stuClass } = req.body
  const sql = 'INSERT INTO users (nic,name,designation,department,telephone,email,password,role,stuClass) VALUES (?,?,?,?,?,?,?,?,?)';
  const hashpass = await bcrypt.hash(password, 12)
  db.query(sql, [nic, name, designation, department, telephone, email, hashpass, role, stuClass], (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json('created');
    }
  })
})

route.get(public_routes.users, isAuth, (req, res, next) => {
  const sql = 'SELECT * FROM users;'
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error)
    } else {
      res.render(index, {
        title: "users",
        page_path: "users/users",
        userRes: result,
        user: req.session.user,
      });
    }
  })
});

route.get(public_routes.users_details, isAuth, (req, res, next) => {
  res.render(index, {
    title: "users-details",
    page_path: "users/users-details",
    user: req.session.user,
  });
});

route.get(public_routes.add_users, isAuth, (req, res, next) => {
  res.render(index, {
    title: "users",
    page_path: "users/add-users",
    classes: classes,
  });
});

route.get(public_routes.edit_users, isAuth, (req, res, next) => {
  res.render(index, {
    title: "users",
    page_path: "users/edit-users",
  });
});

route.get(public_routes.claims, isAuth, (req, res, next) => {
  let sql = `
  SELECT users.nic,users.name,users.designation,
  claims.approved_by,claims.approval_status,
  claims.id, claims.payment_status
  FROM users,claims
  WHERE users.id=claims.lecturer_id AND users.id=?`;
  db.query(sql,[req.session.user.id], (error, results) => {
    if (!error) {
      res.render(index, {
        title: "claim",
        page_path: "claim/claims",
        user: req.session.user,
        claims: results
      });
    } else { console.error(error) }
  })
});

route.get(public_routes.claim_approvals, isAuth, (req, res, next) => {
  let sql = `SELECT
  users.nic,users.name,users.designation,
  claims.approved_by,claims.approval_status,
  claims.id, claims.lecturer_id, claims.hod_approval_status,
  claims.reg_approval_status, claims.vc_approval_status,
  claims.payment_status
  FROM users, claims
  WHERE users.id=claims.lecturer_id AND users.department=?`;
  db.query(sql,[req.session.user.department], (error, results) => {
    if (!error) {
      console.log(getStatusField(req));
      res.render(index, {
        title: "claim Approvals",
        page_path: "claim/claim-approvals",
        user: req.session.user,
        claims: results,
        statusField: getStatusField(req)
      });
    } else { console.error(error) }
  })
});

route.put(public_routes.claimsIdParam, (req, res, next) => {
  const id=req.params.id
  const status=req.body.status
  try {
    let sql='UPDATE claims SET hod_approval_status=?,approved_by=? WHERE id=?';
    if (req.session.user.role == "hod") {
      sql='UPDATE claims SET hod_approval_status=?,hod_id=? WHERE id=?';
    }
    db.query(sql,[status,req.session.user.id,id],(error,result)=>{
      if(error){
        res.json(error);
      }else{
        res.json({status: 200, msg: 'updated successfully'});
      }
    })
  } catch (error) {
    console.error(error)
  }
});

route.get(public_routes.add_claim, isAuth, (req, res, next) => {
  res.render(index, {
    title: "claim",
    page_path: "claim/add-claim",
    user: req.session.user,
  });
});

route.post(public_routes.add_claim, isAuth, (req, res, next) => {
  const { lecturer_id } = req.body;
  const sql = 'INSERT INTO claims (lecturer_id) VALUES (?)'
  db.query(sql, [lecturer_id], (error, result) => {
    if (error) {
      console.error(error)
    } else {
      // res.redirect('add-claim',)
      res.send('added')
    }
  })
})

route.get(public_routes.edit_claim, isAuth, (req, res, next) => {
  const claimId = req.params?.id
  const sql = 'SELECT * FROM lesson WHERE claim_id = ?'
  db.query(sql, claimId, (error, resultSet) => {
    if (error) {
      console.log(error);
    }
    else {
      res.render(index, {
        title: "Claim",
        page_path: "claim/edit-claim",
        user: req.session.user,
        claimId: claimId,
        lessons: resultSet,
        courses: courses,
        classes: classes,
        moment: moment
      });
    }
  });
});


// LESSON

route.get(public_routes.lesson,isAuth, (req, res, next) => {
  const sql = `
    SELECT users.name,lesson.approved_by,lesson.approval_status,lesson.id, lesson.date, lesson.time, lesson.course_code,lesson.credit_hours
    FROM users,lesson
    WHERE users.id=lesson.lecturer_id AND lesson.class_name='${req.session.user.stuClass}'`
  db.query(sql, (error, results) => {
    if (!error) {
      res.render(index, {
        title: "lesson",
        page_path: "lesson/lessons",
        lessons: results,
        moment: moment
      });
    } else { console.error(error) }
  })
});

route.post(public_routes.lesson, (req, res, next) => {
  const { date, time, course_code, credit_hours, lecturer_id, claim_id, class_name } = req.body
  console.log(req.body);
  // const mysqldate=moment(date,'MM/DD/YYYY').format('YYYY:MM:DD')
  const sql = 'INSERT INTO lesson (date,time,course_code,class_name,credit_hours,lecturer_id,claim_id) VALUES (?,?,?,?,?,?,?)'
  db.query(sql, [date, time, course_code, class_name, credit_hours, lecturer_id, claim_id], (error, result) => {
    if (error) {
      console.error(error)
    } else {
      res.json('lesson added ')
    }
  })
});

route.put(public_routes.lessonIdParam, (req, res, next) => {
  const id=req.params.id
  try {
    const sql='UPDATE lesson SET approval_status=?,approved_by=? WHERE id=?'
    db.query(sql,['Approved',req.session.user.id,id],(error,result)=>{
      if(error){
        res.json(error);
      }else{
        res.json({status: 200, msg: 'updated successfully'});
      }
    })
  } catch (error) {
    console.error(error)
  }
});


route.get(public_routes.departments, (req, res, next) => {
  res.render(index, {
    title: "Departments",
    page_path: "departments/departments",
  });
});

route.get(public_routes.add_department, (req, res, next) => {
  res.render(index, {
    title: "Departments",
    page_path: "departments/add-department",
  });
});

route.get(public_routes.edit_department, (req, res, next) => {
  res.render(index, {
    title: "Departments",
    page_path: "departments/edit-department",
  });
});

route.get(public_routes.subjects, (req, res, next) => {
  res.render(index, {
    title: "subjects",
    page_path: "subjects/subjects",
  });
});

route.get(public_routes.add_subject, (req, res, next) => {
  res.render(index, {
    title: "subjects",
    page_path: "subjects/add-subject",
  });
});

route.get(public_routes.edit_subject, (req, res, next) => {
  res.render(index, {
    title: "subjects",
    page_path: "subjects/edit-subject",
  });
});

// ----------------------- ( Error pages ) ------------------------

route.get(public_routes.pageNotFount, (req, res, next) => {
  res.render(index_error, {
    title: "Error 404",
    page_path: "error-404",
    layout: index_error,
  });
});
route.get(public_routes.serverError, (req, res, next) => {
  res.render(index_error, {
    title: "Error 500",
    page_path: "error-500",
    layout: index_error,
  });
});

route.get("/", function (req, res) {
  res.redirect(public_routes.login);
});
route.get("*", function (req, res) {
  res.redirect(public_routes.pageNotFount);
});

function getStatusField(req) {
  if (req.session.user.role == "hod" ) {
    return "hod_approval_status";
  } else if(req.session.user.role == "registerer"){
    return "reg_approval_status";
  } else if(req.session.user.role == "vc"){
    return "vc_approval_status";
  }
  return "approval_status";
}

module.exports = route;


