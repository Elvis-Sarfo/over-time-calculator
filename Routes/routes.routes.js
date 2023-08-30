'use strict;'
const express = require("express");
const db=require('../config/dbcon')
const route = express.Router();
const public_routes = require("./public.routes");
const bcrypt=require("bcryptjs")
const session=require('express-session')
const MysqlStore=require('express-mysql-session')(session)
const index = "index";
const index_without_nav = "index-without-nav";
const index_error = "index-error";
// ========================================
const sessionStore=new MysqlStore({
  host:process.env.HOSTNAME,
  user:process.env.USER,
  password:process.env.PASSWORD,
  database:process.env.DATABASE,
  clearExpired:true,
  checkExpirationInterval:900000,
  expiration:86400000
})
route.use(session({
  name:'overtimeSession',
  secret:"overtime1234",
  resave:false,
  saveUninitialized:false,
  store:sessionStore
}))
// ========================================
const isAuth=(req,res,next)=>{
  try {
      if(req.session.isAuth){
          next()
      }else{
          res.redirect(public_routes.login)
      }
  } catch (error) {
      
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

{
  /* < Auth > */
}
route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Login",
    layout: index_without_nav,
    page_path: "login",
  });
});
route.get(public_routes.logout, (req, res, next) => {
  req.session.destroy(error=>{
    if(error){
      console.log(error);
    }
    else{
      res.clearCookie('overtimeSession')
      res.redirect(public_routes.login)
    }
  })
});
route.post(public_routes.login, (req, res, next) => {
  console.log(req.body);
  const {email,password}=req.body
  try {
    if(email,password){
        const sql='SELECT * FROM users WHERE email=?'
        db.query(sql,email,async(err,result)=>{
            if(!err){
                const passHash=result[0]['password']                
                const verify=await bcrypt.compare(password,passHash)
                if(verify){
                    req.session.isAuth=true
                    req.session.authorization=result[0]['role']
                    console.log(req.session);
                    // res.render(index, {
                    //   title: "Dashboard",
                    //   page_path: "dashboard/admin",
                    // });
                    res.redirect(public_routes.admin_dashboard)
                }
                else{
                    console.log('Oops...');
                    res.redirect(public_routes.login)
                }
            }
            console.log(err);
        })
    }
    else{
        console.log('all fields are required');
    }
} catch (error) {
    console.log(error);
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

route.get(public_routes.admin_dashboard,isAuth,(req, res, next) => {
  const sql='SELECT * FROM users WHERE role=?'
  db.query(sql,req.session.authorization,(error,result)=>{
    if(error){
      res.send(error)
    }else{
      res.render(index, {
        title: "Dashboard",
        page_path: "dashboard/admin",
        user:result
      });
    }
  })
});
// route.post(public_routes.admin_dashboard, (req, res, next) => {
//   res.render(index, {
//     title: "Dashboard",
//     page_path: "dashboard/admin",
//   });
// });
route.post(public_routes.register,async(req,res,next)=>{
  const {nic,name,designation,department,telephone,email,password,role}=req.body
  const sql='INSERT INTO users (nic,name,designation,department,telephone,email,password,role) VALUES (?,?,?,?,?,?,?,?)';
  const hashpass=await bcrypt.hash(password,12)
  db.query(sql,[nic,name,designation,department,telephone,email,hashpass,role],(err,result)=>{
    if(err){
      res.send(err)
    }else{
      res.send('created');
    }
  })
})

route.get(public_routes.teacher_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Teacher-dashboard",
    page_path: "dashboard/teacher-dashboard",
  });
});

route.get(public_routes.users_dashboard, (req, res, next) => {
  res.render(index, {
    title: "users-dashboard",
    page_path: "dashboard/users-dashboard",

  });
  
});

route.get(public_routes.users, (req, res, next) => {
//  function getMe(){
//   const sql='SELECT * FROM users WHERE role=?'
//   db.query(sql,req.session.authorization,(error,result)=>{
//     if(error){
//       console.error(error)
//     }
//     return result
//   })
//  }
 
  const sql='SELECT * FROM users;'
  db.query(sql,(error,result)=>{
    if(error){
      console.error(error)
    }
    else{
      const sql='SELECT * FROM users WHERE role=?'
      db.query(sql,req.session.authorization,(error,secondresult)=>{
        if(error){
          console.log(error);
        }
        else{
          res.render(index, {
            title: "users",
            page_path: "users/users",
            userRes:result,
            user:secondresult
          });
        }
      })
     
    }
  })
});

route.get(public_routes.users_grid, (req, res, next) => {
  res.render(index, {
    title: "users",
    page_path: "users/users-grid",
  });
});

route.get(public_routes.users_details, (req, res, next) => {
  res.render(index, {
    title: "users-details",
    page_path: "users/users-details",
  });
});

route.get(public_routes.add_users, (req, res, next) => {
  const sql='SELECT * FROM users;'
  db.query(sql,(error,result)=>{
    if(error){
      console.error(error)
    }
    else{
      const sql='SELECT * FROM users WHERE role=?'
      db.query(sql,req.session.authorization,(error,secondresult)=>{
        if(error){
          console.log(error);
        }
        else{
          res.render(index, {
            title: "users",
            page_path: "users/add-users",
            userRes:result,
            user:secondresult
          });
        }
      })
     
    }
  })
  // const sql='SELECT * FROM users;'
  // db.query(sql,(error,result)=>{
  //   if(error){
  //     console.error(error)
  //   }
  //       else{
  //         res.render(index, {
  //           title: "users",
  //           page_path: "users/add-users",
  //           user:result,
  //         });
  //       }
  //     })
});
route.get(public_routes.edit_users, (req, res, next) => {
  res.render(index, {
    title: "users",
    page_path: "users/edit-users",
  });
});

route.get(public_routes.teachers, (req, res, next) => {
  res.render(index, {
    title: "Teachers",
    page_path: "teachers/teachers",
  });
});

route.get(public_routes.teachers_grid, (req, res, next) => {
  res.render(index, {
    title: "Teachers",
    page_path: "teachers/teachers-grid",
  });
});

route.get(public_routes.teacher_details, (req, res, next) => {
  res.render(index, {
    title: "Teacher-Details",
    page_path: "teachers/teacher-details",
  });
});

route.get(public_routes.add_teacher, (req, res, next) => {
  res.render(index, {
    title: "Teachers",
    page_path: "teachers/add-teacher",
  });
});

route.get(public_routes.edit_teacher, (req, res, next) => {
  res.render(index, {
    title: "Teachers",
    page_path: "teachers/edit-teacher",
  });
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

route.get(public_routes.invoices, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoices",
  });
});

route.get(public_routes.invoices_cancelled, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoices-cancelled",
  });
});

route.get(public_routes.invoices_draft, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoices-draft",
  });
});

route.get(public_routes.invoices_overdue, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoices-overdue",
  });
});

route.get(public_routes.invoices_paid, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoices-paid",
  });
});

route.get(public_routes.invoices_recurring, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoices-recurring",
  });
});

route.get(public_routes.invoice_grid, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoice-grid",
  });
});

route.get(public_routes.add_invoice, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/add-invoice",
  });
});

route.get(public_routes.edit_invoice, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/edit-invoice",
  });
});

route.get(public_routes.view_invoice, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/view-invoice",
  });
});

route.get(public_routes.invoices_settings, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/invoices-settings",
  });
});

route.get(public_routes.tax_settings, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/tax-settings",
  });
});

route.get(public_routes.bank_settings, (req, res, next) => {
  res.render(index, {
    title: "Invoices",
    page_path: "invoices/bank-settings",
  });
});

// -------------- ( Management ) ----------------

route.get(public_routes.fees_collections, (req, res, next) => {
  res.render(index, {
    title: "Fees-collections",
    page_path: "accounts/fees-collections",
  });
});

route.get(public_routes.expenses, (req, res, next) => {
  res.render(index, {
    title: "Expenses",
    page_path: "accounts/expenses",
  });
});

route.get(public_routes.salary, (req, res, next) => {
  res.render(index, {
    title: "Salary",
    page_path: "accounts/salary",
  });
});

route.get(public_routes.add_fees_collection, (req, res, next) => {
  res.render(index, {
    title: "Add-fees-collection",
    page_path: "accounts/add-fees-collection",
  });
});

route.get(public_routes.add_expenses, (req, res, next) => {
  res.render(index, {
    title: "Add-expenses",
    page_path: "accounts/add-expenses",
  });
});

route.get(public_routes.add_salary, (req, res, next) => {
  res.render(index, {
    title: "Add-salary",
    page_path: "accounts/add-salary",
  });
});

route.get(public_routes.holiday, (req, res, next) => {
  res.render(index, {
    title: "Holiday",
    page_path: "holiday/holiday",
  });
});

route.get(public_routes.add_holiday, (req, res, next) => {
  res.render(index, {
    title: "Holiday",
    page_path: "holiday/add-holiday",
  });
});

route.get(public_routes.fees, (req, res, next) => {
  res.render(index, {
    title: "Fees",
    page_path: "fees/fees",
  });
});

route.get(public_routes.add_fees, (req, res, next) => {
  res.render(index, {
    title: "Fees",
    page_path: "fees/add-fees",
  });
});

route.get(public_routes.edit_fees, (req, res, next) => {
  res.render(index, {
    title: "Fees",
    page_path: "fees/edit-fees",
  });
});

route.get(public_routes.claim, (req, res, next) => {
  const sql='SELECT * FROM users WHERE role=?'
  db.query(sql,req.session.authorization,(error,result)=>{
    if(error){
      res.send(error)
    }else{
      const sql='SELECT users.nic,users.designation,claims.approved_by,claims.id FROM users,claims WHERE users.nic=lecturer_id'
      db.query(sql,(error,relresult)=>{
        if(!error){
          res.render(index, {
            title: "claim",
            page_path: "claim/claim",
            user:result,
            reluser:relresult
          });
        }else{console.error(error)}
      })
      
    }
  })
 
});

route.get(public_routes.add_claim, (req, res, next) => {
  const sql='SELECT * FROM users WHERE role=?'
  db.query(sql,req.session.authorization,(error,result)=>{
    if(error){
      res.send(error)
    }else{
      res.render(index, {
        title: "claim",
        page_path: "claim/add-claim",
        user:result
      });
    }
  })
 
});
// TODO add_claim
route.post(public_routes.add_claim,(req,res,next)=>{
  const {lecturer_id}=req.body;
  const sql='INSERT INTO claims (lecturer_id) VALUES (?)'
  db.query(sql,[lecturer_id],(error,result)=>{
    if(error){
      console.error(error)
    }else{
      res.send('added')
    }
  })
})

route.get(public_routes.edit_claim, (req, res, next) => {
  res.render(index, {
    title: "claim",
    page_path: "claim/edit-claim",
  });
});

route.get(public_routes.event, (req, res, next) => {
  res.render(index, {
    title: "Event",
    page_path: "event/event",
  });
});

route.get(public_routes.edit_events, (req, res, next) => {
  res.render(index, {
    title: "Event",
    page_path: "event/edit-events",
  });
});

route.get(public_routes.add_events, (req, res, next) => {
  res.render(index, {
    title: "Event",
    page_path: "event/add-events",
  });
});

route.get(public_routes.time_table, (req, res, next) => {
  res.render(index, {
    title: "Time-table",
    page_path: "time-table/time-table",
  });
});

route.get(public_routes.add_time_table, (req, res, next) => {
  res.render(index, {
    title: "Time-table",
    page_path: "time-table/add-time-table",
  });
});

route.get(public_routes.edit_time_table, (req, res, next) => {
  res.render(index, {
    title: "Time-table",
    page_path: "time-table/edit-time-table",
  });
});

route.get(public_routes.library, (req, res, next) => {
  res.render(index, {
    title: "Library",
    page_path: "library/library",
  });
});

route.get(public_routes.edit_books, (req, res, next) => {
  res.render(index, {
    title: "Library",
    page_path: "library/edit-books",
  });
});

route.get(public_routes.add_books, (req, res, next) => {
  res.render(index, {
    title: "Library",
    page_path: "library/add-books",
  });
});

route.get(public_routes.blog, (req, res, next) => {
  res.render(index, {
    title: "Blog",
    page_path: "blogs/blog",
  });
});

route.get(public_routes.blog_details, (req, res, next) => {
  res.render(index, {
    title: "Blog",
    page_path: "blogs/blog-details",
  });
});

route.get(public_routes.pending_blog, (req, res, next) => {
  res.render(index, {
    title: "Blog",
    page_path: "blogs/pending-blog",
  });
});

route.get(public_routes.add_blog, (req, res, next) => {
  res.render(index, {
    title: "Blog",
    page_path: "blogs/add-blog",
  });
});

route.get(public_routes.edit_blog, (req, res, next) => {
  res.render(index, {
    title: "Blog",
    page_path: "blogs/edit-blog",
  });
});

route.get(public_routes.blog_categories, (req, res, next) => {
  res.render(index, {
    title: "Blog",
    page_path: "blogs/blog-categories",
  });
});

route.get(public_routes.settings, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/settings",
  });
});

route.get(public_routes.localization_details, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/localization-details",
  });
});

route.get(public_routes.payment_settings, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/payment-settings",
  });
});

route.get(public_routes.email_settings, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/email-settings",
  });
});

route.get(public_routes.social_settings, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/social-settings",
  });
});

route.get(public_routes.social_links, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/social-links",
  });
});

route.get(public_routes.seo_settings, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/seo-settings",
  });
});

route.get(public_routes.others_settings, (req, res, next) => {
  res.render(index, {
    title: "settings",
    page_path: "settings/others-settings",
  });
});


// ------------- ( Others ) -----------------

route.get(public_routes.sports, (req, res, next) => {
  res.render(index, {
    title: "Sports",
    page_path: "sports/sports",
  });
});

route.get(public_routes.add_sports, (req, res, next) => {
  res.render(index, {
    title: "Sports",
    page_path: "sports/add-sports",
  });
});

route.get(public_routes.edit_sports, (req, res, next) => {
  res.render(index, {
    title: "Sports",
    page_path: "sports/edit-sports",
  });
});

route.get(public_routes.hostel, (req, res, next) => {
  res.render(index, {
    title: "Hostel",
    page_path: "hostel/hostel",
  });
});

route.get(public_routes.edit_room, (req, res, next) => {
  res.render(index, {
    title: "Hostel",
    page_path: "hostel/edit-room",
  });
});

route.get(public_routes.add_room, (req, res, next) => {
  res.render(index, {
    title: "Hostel",
    page_path: "hostel/add-room",
  });
});

route.get(public_routes.transport, (req, res, next) => {
  res.render(index, {
    title: "Transport",
    page_path: "transport/transport",
  });
});

route.get(public_routes.add_transport, (req, res, next) => {
  res.render(index, {
    title: "Transport",
    page_path: "transport/add-transport",
  });
});

route.get(public_routes.edit_transport, (req, res, next) => {
  res.render(index, {
    title: "Transport",
    page_path: "transport/edit-transport",
  });
});

// ------------- ( Base UI ) ----------------

route.get(public_routes.alerts, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/alerts",
  });
});

route.get(public_routes.accordions, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/accordions",
  });
});

route.get(public_routes.avatar, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/avatar",
  });
});

route.get(public_routes.badges, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/badges",
  });
});

route.get(public_routes.buttons, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/buttons",
  });
});

route.get(public_routes.buttongroup, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/buttongroup",
  });
});

route.get(public_routes.breadcrumbs, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/breadcrumbs",
  });
});

route.get(public_routes.cards, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/cards",
  });
});

route.get(public_routes.carousel, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/carousel",
  });
});

route.get(public_routes.dropdowns, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/dropdowns",
  });
});

route.get(public_routes.grid, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/grid",
  });
});

route.get(public_routes.images, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/images",
  });
});

route.get(public_routes.lightbox, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/lightbox",
  });
});

route.get(public_routes.media, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/media",
  });
});

route.get(public_routes.modal, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/modal",
  });
});

route.get(public_routes.offcanvas, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/offcanvas",
  });
});

route.get(public_routes.pagination, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/pagination",
  });
});

route.get(public_routes.popover, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/popover",
  });
});

route.get(public_routes.progress, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/progress",
  });
});

route.get(public_routes.placeholders, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/placeholders",
  });
});

route.get(public_routes.rangeslider, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/rangeslider",
  });
});

route.get(public_routes.spinners, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/spinners",
  });
});

route.get(public_routes.sweetalerts, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/sweetalerts",
  });
});

route.get(public_routes.tab, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/tab",
  });
});

route.get(public_routes.toastr, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/toastr",
  });
});

route.get(public_routes.tooltip, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/tooltip",
  });
});

route.get(public_routes.typography, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/typography",
  });
});

route.get(public_routes.video, (req, res, next) => {
  res.render(index, {
    title: "Base UI",
    page_path: "base_ui/video",
  });
});

// --------------- ( Elements ) --------------------

route.get(public_routes.ribbon, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/ribbon",
  });
});

route.get(public_routes.clipboard, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/clipboard",
  });
});

route.get(public_routes.drag_drop, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/drag-drop",
  });
});

route.get(public_routes.rating, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/rating",
  });
});

route.get(public_routes.text_editor, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/text-editor",
  });
});

route.get(public_routes.counter, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/counter",
  });
});

route.get(public_routes.scrollbar, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/scrollbar",
  });
});

route.get(public_routes.notification, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/notification",
  });
});

route.get(public_routes.stickynote, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/stickynote",
  });
});

route.get(public_routes.timeline, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/timeline",
  });
});

route.get(public_routes.horizontal_timeline, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/horizontal-timeline",
  });
});

route.get(public_routes.form_wizard, (req, res, next) => {
  res.render(index, {
    title: "Elements",
    page_path: "elements/form-wizard",
  });
});

// ---------------- ( charts ) --------------------------

route.get(public_routes.chart_apex, (req, res, next) => {
  res.render(index, {
    title: "Charts",
    page_path: "charts/chart-apex",
  });
});

route.get(public_routes.chart_js, (req, res, next) => {
  res.render(index, {
    title: "Charts",
    page_path: "charts/chart-js",
  });
});

route.get(public_routes.chart_morris, (req, res, next) => {
  res.render(index, {
    title: "Charts",
    page_path: "charts/chart-morris",
  });
});

route.get(public_routes.chart_flot, (req, res, next) => {
  res.render(index, {
    title: "Charts",
    page_path: "charts/chart-flot",
  });
});

route.get(public_routes.chart_peity, (req, res, next) => {
  res.render(index, {
    title: "Charts",
    page_path: "charts/chart-peity",
  });
});

route.get(public_routes.chart_c3, (req, res, next) => {
  res.render(index, {
    title: "Charts",
    page_path: "charts/chart-c3",
  });
});

// -------------- ( Icons ) --------------

route.get(public_routes.icon_fontawesome, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-fontawesome",
  });
});

route.get(public_routes.icon_feather, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-feather",
  });
});

route.get(public_routes.icon_ionic, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-ionic",
  });
});

route.get(public_routes.icon_material, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-material",
  });
});

route.get(public_routes.icon_pe7, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-pe7",
  });
});

route.get(public_routes.icon_simpleline, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-simpleline",
  });
});

route.get(public_routes.icon_themify, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-themify",
  });
});

route.get(public_routes.icon_weather, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-weather",
  });
});

route.get(public_routes.icon_typicon, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-typicon",
  });
});

route.get(public_routes.icon_flag, (req, res, next) => {
  res.render(index, {
    title: "Icons",
    page_path: "icons/icon-flag",
  });
});

// ------------- ( Forms ) ----------------

route.get(public_routes.form_basic_inputs, (req, res, next) => {
  res.render(index, {
    title: "Forms",
    page_path: "forms/form-basic-inputs",
  });
});

route.get(public_routes.form_input_groups, (req, res, next) => {
  res.render(index, {
    title: "Forms",
    page_path: "forms/form-input-groups",
  });
});

route.get(public_routes.form_horizontal, (req, res, next) => {
  res.render(index, {
    title: "Forms",
    page_path: "forms/form-horizontal",
  });
});

route.get(public_routes.form_vertical, (req, res, next) => {
  res.render(index, {
    title: "Forms",
    page_path: "forms/form-vertical",
  });
});

route.get(public_routes.form_mask, (req, res, next) => {
  res.render(index, {
    title: "Forms",
    page_path: "forms/form-mask",
  });
});

route.get(public_routes.form_validation, (req, res, next) => {
  res.render(index, {
    title: "Forms",
    page_path: "forms/form-validation",
  });
});

// -------------- ( Tables ) ----------------------

route.get(public_routes.tables_basic, (req, res, next) => {
  res.render(index, {
    title: "Tables",
    page_path: "tables/tables-basic",
  });
});

route.get(public_routes.data_tables, (req, res, next) => {
  res.render(index, {
    title: "Tables",
    page_path: "tables/data-tables",
  });
});

// ------------- ( Profile ) ----------------------

route.get(public_routes.compose, (req, res, next) => {
  res.render(index, {
    title: "Compose",
    page_path: "compose/compose",
  });
});

route.get(public_routes.inbox, (req, res, next) => {
  res.render(index, {
    title: "Inbox",
    page_path: "inbox/inbox",
  });
});

route.get(public_routes.profile, (req, res, next) => {
  res.render(index, {
    title: "Profile",
    page_path: "profile/profile",
  });
});

route.get(public_routes.spinner, (req, res, next) => {
  res.render(index, {
    title: "Spinner",
    page_path: "spinner/spinner",
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
