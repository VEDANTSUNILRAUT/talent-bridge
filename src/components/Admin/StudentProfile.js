import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentProfile.css"; // Importing the CSS file for styling

const StudentProfile = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students"); // Adjust the API URL as needed
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`); // Adjust the API URL as needed
      setStudents(students.filter(student => student.id !== id)); // Remove the deleted student from the list
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="admin-dashboard-container">
      {/* Header Section */}
      <header className="header">
        <h1>Placement Portal</h1>
        <nav className="nav">
          {["Dashboard", "Post Notice", "Database", "Placed Students", "Log Out"].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase().replace(" ", "-")}`} className="">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <div className="dashboard">
        <aside className="sidebar">
          <h2>Welcome Admin</h2>
          <ul>
            {[{ name: "Dashboard", path: "/students-profile" }, { name: "Active Drives" }, { name: "Students Profile" }, { name: "Co-Ordinators" }, { name: "Logout" }].map((item, index) => (
              <li key={index}>
                <a href={`#${item.name.toLowerCase().replace(" ", "-")}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <div className="content-box">
            <h2>Candidates Database</h2>
          </div>

          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div className="students-table">
              <table>
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Highest Qualification</th>
                    <th>Skills</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Download Resume</th>
                    <th>Status</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.qualification}</td>
                      <td>{student.skills}</td>
                      <td>{student.city}</td>
                      <td>{student.state}</td>
                      <td>
                        <a href={student.resumeUrl} download>Download</a>
                      </td>
                      <td>{student.status}</td>
                      <td>
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>Next</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentProfile;
