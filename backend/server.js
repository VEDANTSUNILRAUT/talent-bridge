const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'talent_bridge_db',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Student Signup API : http://localhost:5000/student_signup
app.post('/student_signup', (req, res) => {
  const sql = "INSERT INTO student (`first_name`, `last_name`, `email`, `password`, `phone_number`,`city`,`state`,`skills`,`dob`,`passing_year`,`qaulification`,`stream`) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password,
    req.body.phoneNumber,
    req.body.city,
    req.body.state,
    req.body.skills,
    req.body.dob,
    req.body.passing_year,
    req.body.qaulification,
    req.body.stream,
  ];

  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Student Login API Ends Here

// Student Login API : http://localhost:5000/student_login
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
app.post('/student_login', (req, res) => {

  const sql = "SELECT * FROM student WHERE email = ? AND password = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if(data.length > 0){
      return res.json("Student Login Successfully");
    }else{
      return res.json("Invalid Credentials");
    }
  })
  });
// Student Login API Ends Here.

// Jobs Fetch API : http://localhost:5000/jobs
app.get('/jobs', (req, res) => {
  const sql = "SELECT * FROM jobs";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
  // Jobs fetch code ends here.

});

app.get('/', (req, res) => {
  return res.json("Backend is working");
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
