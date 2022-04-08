require('dotenv').config();
const express = require('express');
const app = express();

// const conn = require('./dbConn');
const path = require('path');
const conn = require('./database/dbConnPool');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');

const PORT = process.env.PORT || 3500;
app.set('view engine', 'ejs');


const sessionTime = 1000 * 60 * 60 * 24; // 24 hours

//session middleware
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: sessionTime },
    resave: false
}));


// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());





app.use('/', express.static(path.join(__dirname, '/public')));
// app.use('/subdir', express.static(path.join(__dirname, '/public')));
app.use('/auth', express.static(path.join(__dirname, '/public')));



// let query = `Select * from "user"`;
// let query = `Select * from user`;

// conn.query(query, (err, res) => {
//     if (!err) {
//         console.log("rows here")
//         console.log(res);
//     } else {
//         console.log(err.message)
//     }
//     conn.end;
// })


// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });

// conn.connect((err) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log('connected to db');
//     app.listen(PORT, () => {
//         console.log(`listening on port ${PORT}`);
//     })
// })


// var mysqlLib = require("mysqlLib");

// mysqlLib.getConnection(function(err, mclient) {
//   //do queries that you need
//   var sql = '//Your SQL here';
//   var inserts = [your inserts here];
//   sql = mysql.format(sql, inserts);
//   mclient.query(sql, function (err, rows) {

//   if (err) {
//                 //handle error here
//             }

//   })
// });

//routing 
app.use('/', require('./routes/site'))
app.use('/auth', require('./routes/auth'));


app.all('*', (req, res) => {
    res.status(404)
        .render(path.join(__dirname, 'views/pages', '404.ejs'));
})


conn.getConnection((err, mclient) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('connected to db');
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
})  