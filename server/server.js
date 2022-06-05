const express = require("express");
const dotenv = require('dotenv');
const path = require('path');
const mysql = require("mysql");
const session = require('express-session');
const bodyParser = require('body-parser');
const passport= require('passport');
const flash = require('express-flash');
const bcrypt = require("bcrypt");
const { rootCertificates } = require("tls");
const { error } = require("console");
const app = express();




app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("hello world");
});

app.post("/post", (req, res) => {
    console.log("Your Connection to React is established now ");
    res.redirect("/");
  });

dotenv.config({path: './.env'});

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs')

db.connect( (error) => {
  if(error){
    console.log(error)
  } else {
    console.log("db is connected")
  }
});


app.post('/login', function(request, response) {
	
	let errors = [];

	var email = request.body.email;
	var password = request.body.password;
  console.log(email);
  console.log(password);
	
	if (email && password) {
		db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				console.log("login good");
        response.redirect("/");
			} else {
				errors.push({ message: "Wrong Password / email,  try again!" });
				console.log("login bad");
        response.redirect("/");
			}			
			response.end(); 
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server starting on port ${PORT}`));
