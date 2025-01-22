const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json()); // For parsing application/json
app.use(cookieParser());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "talent_bridge_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

// Student Signup API : http://localhost:5000/student_signup
app.post("/student_signup", (req, res) => {
  const sql =
    "INSERT INTO student (`first_name`, `last_name`, `email`, `password`, `phone_number`,`city`,`state`,`skills`,`dob`,`passing_year`,`qaulification`,`stream`) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?)";
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
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
app.post("/student_login", (req, res) => {
  const sql = "SELECT * FROM student WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      const token = jwt.sign({ id: data[0].email }, "jwt-secret-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      });
      return res.json({ Status: "Success" });
    } else {
      return res.json("Invalid Credentials");
    }
  });
});
// Student Login API Ends Here.

// Jobs Fetch API : http://localhost:5000/jobs
app.get("/jobs", (req, res) => {
  const sql = "SELECT * FROM jobs";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Current Jobs fetch API : http://localhost:5000/jobs/current
app.get("/current", (req, res) => {
  const sql = `
    SELECT 
      job_id,
      title, 
      company_name, 
      location, 
      salary, 
      posted_date 
    FROM jobs 
    WHERE company_type = 'current'
  `;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//upcoming jobs fetch API : http://localhost:5000/jobs/upcoming
app.get("/upcoming", (req, res) => {
  const sql = `
    SELECT 
      job_id,
      title, 
      company_name, 
      location, 
      salary, 
      posted_date 
    FROM jobs 
    WHERE company_type = 'upcoming'
  `;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//
app.get("/partner", (req, res) => {
  const sql = `
    SELECT 
      job_id,
      title, 
      company_name, 
      location, 
      salary, 
      posted_date 
    FROM jobs 
    WHERE company_type = 'partner'
  `;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Jobs fetch code ends here.

// fetch the data of coordinator : http://localhost:5000/coordinator
app.get("/coordinator", (req, res) => {
  const sql = `
    SELECT 
      coordinator_id,
      full_name, 
      email, 
      phone_number, 
      designation, 
      institution_name, 
      institution_email
    FROM coordinator
  `;

  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

// student fetch API : http://localhost:5000/student
app.get("/student", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// student fetch code ends here.

// Admin Profile API : http://localhost:5000/admin-profile
app.get("/admin-profile", (req, res) => {
  const sql = "SELECT * FROM tpo";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});

// Getting the Data of user : http://localhost:5000/student
// Fetch Student Profile API : http://localhost:5000/student_profile
//app.get('/student_profile', (req, res) => {
//   // Assuming you pass the student's email in the query parameter to identify them
//   const sql = "SELECT * FROM student";

//   db.query(sql, [req.query.email], (err, data) => {
//     if (err) return res.json("Error fetching profile");
//     if (data.length > 0) {
//       return res.json(data[0]); // Send the first student's data if found
//     } else {
//       return res.json("Student not found");
//     }
//   });
// });
// Verify Token Middleware for Protected Routes
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("Unauthorized: No token provided");
  }

  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) return res.status(401).json("Invalid Token");
    req.user = decoded;
    next();
  });
};
// ✅ Apply the middleware to protect the student profile route
app.get("/student_profile", verifyToken, (req, res) => {
  const sql = "SELECT * FROM student WHERE email = ?";
  db.query(sql, [req.user.id], (err, data) => {
    if (err) return res.status(500).json("Error fetching profile");
    if (data.length > 0) {
      return res.json(data[0]);
    } else {
      return res.status(404).json("User not found");
    }
  });
});

// API to fetch counts for dashboard stats
app.get("/dashboard-stats", (req, res) => {
  const sql = `
    SELECT 
      (SELECT COUNT(*) FROM jobs WHERE company_type = 'current') AS currentCount,
      (SELECT COUNT(*) FROM jobs WHERE company_type = 'upcoming') AS upcomingCount,
      (SELECT COUNT(*) FROM jobs WHERE company_type = 'partner') AS partnerCount,
      (SELECT COUNT(*) FROM student) AS studentCount,
      (SELECT COUNT(*) FROM coordinator) AS coordinatorCount
  `;

  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data[0]); // Send the counts as a JSON response
  });
});
// Logout Functionality
app.get("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: false }); // Clear the JWT token cookie
  return res
    .status(200)
    .json({ Status: "Success", message: "Logged out successfully" });
});

// Edit Functionality
// Update Student Profile API : http://localhost:5000/update_student_profile
app.put("/update_student_profile", verifyToken, (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    city,
    state,
    skills,
    dob,
    passing_year,
    qaulification,
    stream,
  } = req.body;

  const sql = `
    UPDATE student 
    SET 
      first_name = ?, 
      last_name = ?, 
      phone_number = ?, 
      city = ?,
      state = ?, 
      skills = ?, 
      dob = ?, 
      passing_year = ?, 
      qaulification = ?,
      stream = ?
    WHERE email = ?
  `;

  const values = [
    first_name,
    last_name,
    phone_number,
    city,
    state,
    skills,
    dob,
    passing_year,
    qaulification,
    stream,
    email,
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json("Error updating profile");
    return res.status(200).json("Profile updated successfully");
  });
});

// API endpoint to fetch student details by ID
app.get("/student/:id", (req, res) => {
  const studentId = req.params.id;

  const query = "SELECT * FROM student WHERE id = ?";
  db.execute(query, [studentId], (err, result) => {
    if (err) {
      console.error("Error fetching student data:", err); // Log the error for debugging
      return res
        .status(500)
        .json({ error: "Database error", details: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(result[0]); // Return the student data
  });
});

// Crud api to add coridatior
app.post("/add_cordinator", (req, res) => {
  const sql =
    "INSERT INTO coordinator (`full_name`, `email`, `phone_number`, `designation`, `institution_name`, `institution_address`, `institution_contact`, `institution_email`, `username`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.full_name,
    req.body.email,
    req.body.phone_number,
    req.body.designation,
    req.body.institution_name,
    req.body.institution_address,
    req.body.institution_contact,
    req.body.institution_email,
    req.body.username,
    req.body.password,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database Error: ", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res
      .status(200)
      .json({ message: "Coordinator added successfully!", data });
  });
});

// Crud company api for crete company : https://localhost:5000/add_company
app.post("/add_company", (req, res) => {
  const sql =
    "INSERT INTO jobs (`title`, `description`, `company_name`, `location`, `employment_type`, `salary`, `posted_date`, `closing_date`, `skills_required`, `experience_required`, `job_category`, `application_link`, `company_type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.company_name,
    req.body.location,
    req.body.employment_type,
    req.body.salary,
    req.body.posted_date,
    req.body.closing_date,
    req.body.skills_required,
    req.body.experience_required,
    req.body.job_category,
    req.body.application_link,
    req.body.company_type,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database Error: ", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Job added successfully!", data });
  });
});
//Post reuirest for the contact form
// POST API to store contact details: http://localhost:5000/contact
app.post("/contact", (req, res) => {
  const sql = `
    INSERT INTO contactdetail (name, email, message) 
    VALUES (?, ?, ?)
  `;

  const values = [
    req.body.name,
    req.body.email, // Change "address" to "email"
    req.body.message,
  ];

  db.query(sql, values, (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ Status: "Error", message: "Error saving contact details" });
    return res.status(201).json({
      Status: "Success",
      message: "Contact details saved successfully",
    });
  });
});

app.get("/", (req, res) => {
  return res.json("Backend is working");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
