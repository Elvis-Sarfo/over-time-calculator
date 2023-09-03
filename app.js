'use strict;'
const express = require("express");
const app = express();
const path = require("path");
const route = require("./Routes/routes.routes");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const ejs = require("ejs").__express;
const MysqlStore = require('express-mysql-session')(session)

require('dotenv').config('config.env')

// const readDocFile = require("./utils/readDocFiles")

// const fs = require("fs");
// var https = require("https");

// ========================================
const sessionStore = new MysqlStore({
  host: process.env.HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  clearExpired: true,
  checkExpirationInterval: 900000,
  expiration: 86400000
})
app.use(session({
  name: 'overtimeSession',
  secret: "overtime1234",
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}))

// Optionally use onReady() to get a promise that resolves when store is ready.
sessionStore.onReady().then(() => {
	// MySQL session store ready for use.
	console.log('MySQLStore ready');
}).catch(error => {
	// Something went wrong.
	console.error(error);
});

const port = process.env.PORT || 3002;

require("dotenv").config();
app.use(express.static(path.join(__dirname + "/public")));
app.set("views", path.join(__dirname, "Views/Layouts"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ resave: false, saveUninitialized: true, secret: "nodedemo" })
);

app.set("layout", "index");
app.set("view engine", "ejs");
app.engine("ejs", ejs);
app.use(expressLayouts);

app.use("/", route);


//  readDocFile();

// --------- ( For deployment use ) ------------

// https
//   .createServer(
//     {
//       key: fs.readFileSync("sslcert/ssl.key"),
//       cert: fs.readFileSync("sslcert/ssl.cert"),
//     },
//     app
//   )
//   .listen(port, function () {
//     console.log(
//       "Server is up and running on port number " + port + " for Https"
//     );
//   });


// --------- ( For deployment use ) ------------ //

// -------------- (For Development use end) ----------------------

app.listen(port, () => console.log(`server is running on ${port}`));

// -------------- (For Development use end) ---------------------- //
