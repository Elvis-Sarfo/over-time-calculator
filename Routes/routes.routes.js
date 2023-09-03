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
// ========================================
const sessionStore = new MysqlStore({
  host: process.env.HOSTNAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  clearExpired: true,
  checkExpirationInterval: 900000,
  expiration: 86400000
})
route.use(session({
  name: 'overtimeSession',
  secret: "overtime1234",
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}))

// ========================================
const isAuth = (req, res, next) => {
  try {
    if (req.session.isAuth) {
      res.locals.user = req.session.user
      next()
    } else {
      res.redirect(public_routes.login)
    }
  } catch (error) {
    console.error(error);
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
      if (err) throw (err);
      const user = result[0];
      const passHash = user?.password
      const verify = await bcrypt.compare(password, passHash)
      if (verify) {
        req.session.isAuth = true;
        req.session.authorization = user?.role;
        req.session.user = user;
        res.redirect(public_routes.admin_dashboard);
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
  const { nic, name, designation, department, telephone, email, password, role } = req.body
  const sql = 'INSERT INTO users (nic,name,designation,department,telephone,email,password,role) VALUES (?,?,?,?,?,?,?,?)';
  const hashpass = await bcrypt.hash(password, 12)
  db.query(sql, [nic, name, designation, department, telephone, email, hashpass, role], (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send('created');
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
  const sql = 'SELECT * FROM users;'
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error)
    }
    else {
      res.render(index, {
        title: "users",
        page_path: "users/add-users",
        user: result,
        user: req.session.user,
      });
    }
  })
});

route.get(public_routes.edit_users, isAuth, (req, res, next) => {
  res.render(index, {
    title: "users",
    page_path: "users/edit-users",
  });
});

route.get(public_routes.claims, isAuth, (req, res, next) => {
  const sql = 'SELECT users.nic,users.designation,claims.approved_by,claims.approval_status,claims.id FROM users,claims WHERE users.nic=lecturer_id'
  db.query(sql, (error, results) => {
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
  res.render(index, {
    title: "Claim",
    page_path: "claim/edit-claim",
    user: req.session.user,
  });
});


// LESSON

route.get(public_routes.lesson, (req, res, next) => {
  const sql = 'SELECT * FROM users WHERE role=?'
  db.query(sql, req.session.authorization, (error, result) => {
    if (error) {
      console.error(error)
    } else {
      const sql = 'SELECT * FROM lesson'
      db.query(sql, (error, relresult) => {
        if (error) {
          console.log(error);
        }
        else {
          res.render(index, {
            title: 'Lessons',
            page_path: 'lesson/add-lesson',
            user: result,
            reluser: relresult
          });
        }
      })

    }
  })
});

route.post(public_routes.lesson, (req, res, next) => {
  const { date, time, course_code, credit_hours, lecturer_id, claim_id } = req.body
  console.log(req.body);
  // const mysqldate=moment(date,'MM/DD/YYYY').format('YYYY:MM:DD')
  const sql = 'INSERT INTO lesson (date,time,course_code,credit_hours,lecturer_id,claim_id) VALUES (?,?,?,?,?,?)'
  db.query(sql, [date, time, course_code, credit_hours, lecturer_id, claim_id], (error, result) => {
    if (error) {
      console.error(error)
    } else {
      const claimId = req.params?.id
      res.render(index, {
        title: "Claim",
        page_path: "claim/edit-claim",
        user: req.session.user,
      });
      res.json('lesson added ')
    }
  })
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


module.exports = route;
