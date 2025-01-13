import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css"; // Importing CSS for styling



const AdminDashboard = () => {
  // State to store the dashboard statistics data
  const [stats, setStats] = useState({
    coordinators: 0,
    pendingCoordinators: 0,
    registeredStudents: 0,
    pendingStudents: 0,
    totalDrivePosts: 0,
    totalApplications: 0,
  });

  // State to track the active link in the sidebar navigation
  const [activeLink, setActiveLink] = useState("dashboard");

  // useEffect hook to fetch the dashboard statistics data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching statistics data from the API
        const response = await axios.get("http://localhost:5000/api/dashboard-stats");
        setStats(response.data); // Updating the state with fetched data
      } catch (error) {
        console.error("Error fetching dashboard statistics:", error); // Handling any errors
      }
    };
    fetchData(); // Trigger the API call
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Function to handle sidebar link clicks and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link to highlight the selected menu item
  };

  return (
    <div className="admin-dashboard-container">
      {/* Header Section */}
      <header className="header">
        <h1>Placement Portal</h1>
        <nav className="nav">
          {/* Mapping through navigation items */}
          {["Dashboard", "Post Notice", "Database", "Placed Students", "Log Out"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`} // Generate link based on item name
              className={activeLink === item.toLowerCase() ? "active" : ""} // Add 'active' class to highlight selected link
              onClick={() => handleLinkClick(item.toLowerCase())} // Set the active link on click
            >
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
            {/* Mapping through sidebar menu items */}
            {[
              { name: "Dashboard", icon: "🏠" },
              { name: "Active Drives", icon: "📋" },
              { name: "Students Profile", icon: "🧑‍🎓", path: "../Pages/Student_Profile" },
              { name: "Co-Ordinators", icon: "➕" },
              { name: "Logout", icon: "🚪" },
            ].map((item, index) => (
              <li key={index} className={activeLink === item.name.toLowerCase() ? "active" : ""}>
                <a
                  href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                  onClick={() => handleLinkClick(item.name.toLowerCase())}
                >
                  <span className="icon">{item.icon}</span> {/* Display the icon */}
                  {item.name} {/* Display the item name */}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <div className="content-box">
            <h2>Placement Cell Statistics</h2> {/* Heading for the stats section */}
          </div>

          {/* Stats Grid Section */}
          <div className="stats-grid">
            {/* Mapping through stats items and displaying them dynamically */}
            {[
              { title: "CO-ORDINATORS", value: stats.coordinators, color: "red", icon: "🧑‍💼" },
              { title: "PENDING COORDINATORS APPROVAL", value: stats.pendingCoordinators, color: "red", icon: "🕒" },
              { title: "REGISTERED STUDENTS", value: stats.registeredStudents, color: "green", icon: "🧑‍🎓" },
              { title: "PENDING STUDENTS CONFIRMATION", value: stats.pendingStudents, color: "green", icon: "🕒" },
              { title: "TOTAL DRIVE POSTS", value: stats.totalDrivePosts, color: "blue", icon: "📝" },
              { title: "TOTAL DRIVE APPLICATIONS", value: stats.totalApplications, color: "orange", icon: "📑" },
            ].map((stat, index) => (
              <div key={index} className={`stat-box ${stat.color}`}>
                <span className="icon">{stat.icon}</span> {/* Display icon */}
                <h3>{stat.title}</h3> {/* Display stat title */}
                <p>{stat.value}</p> {/* Display stat value */}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
