import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import img from "../../assets/images/LoginModal/admin.png";



const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();
  const [adminProfile, setAdminProfile] = useState({});
  const [activeDrives, setActiveDrives] = useState([]);
  const [upcomingCompany, setUpcomingCompany] = useState([]);
  const [partnerdrive, setpartnerdrive] = useState([]);
  const [student, setStudent] = useState([]);

  const [stats, setStats] = useState({
    coordinators: 0,
    pendingCoordinators: 0,
    registeredStudents: 0,
    pendingStudents: 0,
    totalDrivePosts: 0,
    totalApplications: 0,
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const profileResponse = await axios.get("http://localhost:5000/admin-profile");
        setAdminProfile(profileResponse.data);

        const drivesResponse = await axios.get("http://localhost:5000/current");
        setActiveDrives(drivesResponse.data);
        
        const upcomingCompany = await axios.get("http://localhost:5000/upcoming");
        setUpcomingCompany(upcomingCompany.data);

        const partnerCompany = await axios.get("http://localhost:5000/partner");
        setpartnerdrive(partnerCompany.data);

        const fetchStudentdata = await axios.get("http://localhost:5000/student");
        setStudent(fetchStudentdata.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAdminData();
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: "🏠", section: "dashboard" },
    { name: "Students", icon: "👩‍🎓", section: "students" },
    { name: "Active Drives", icon: "📋", section: "active-drives" },
    {name: " Upcoming Drives", icon: "🏢", section: "companies" },
    { name: "Partners", icon: "👤", section: "Partners" },
    { name: "Coordinators", icon: "👩‍💼", section: "coordinators" },
    { name: "Logout", icon: "🚪", section: "logout" },
  ];

  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="profile-section">
          <img src={img} alt="Admin" className="profile-photo" />
          <div className="profile-info">
            <h2>{adminProfile.full_name}</h2>
            <p>{adminProfile.email}</p>
          </div>
        </div>
        <button className="view-profile" onClick={() => navigate("/admin-profile")}>
          View Profile
        </button>
      </header>

      <div className="dashboard">
        <aside className="sidebar">
          <h2>Welcome TPO</h2>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.section}
                className={activeSection === item.section ? "active" : ""}
                onClick={() =>
                  item.section === "logout" ? navigate("/logout") : setActiveSection(item.section)
                }
              >
                <span>{item.icon}</span> {item.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <h2>{activeSection.toUpperCase()}</h2>
          {activeSection === "dashboard" && (
            <div className="dashboard-grid-container">
            <div className="stats-grid">
              <div className="stat-box blue">
                <h3>Total Coordinators</h3>
                <p>{stats.coordinators}</p>
              </div>
              <div className="stat-box orange">
                <h3>Pending Coordinators</h3>
                <p>{stats.pendingCoordinators}</p>
              </div>
              <div className="stat-box green">
                <h3>Registered Students</h3>
                <p>{stats.registeredStudents}</p>
              </div>
              <div className="stat-box red">
                <h3>Pending Students</h3>
                <p>{stats.pendingStudents}</p>
              </div>
              <div className="stat-box purple">
                <h3>Total Drive Posts</h3>
                <p>{stats.totalDrivePosts}</p>
              </div>
              <div className="stat-box teal">
                <h3>Total Applications</h3>
                <p>{stats.totalApplications}</p>
              </div>
            </div>
          </div>
          )}
          {activeSection === "active-drives" && (
            <table className="job-table">
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Salary</th>
                  <th>Posted Date</th>
                </tr>
              </thead>
              <tbody>
                {activeDrives.map((drive, index) => (
                  <tr key={index}>
                    <td>{drive.job_id}</td>
                    <td>{drive.title}</td>
                    <td>{drive.company_name}</td>
                    <td>{drive.location}</td>
                    <td>{drive.salary}</td>
                    <td>{drive.posted_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {activeSection === "companies" && (
            <table className="job-table">
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Posted Date</th>
              </tr>
            </thead>
            <tbody>
              {upcomingCompany.map((Udrive, index) => (
                <tr key={index}>
                  <td>{Udrive.job_id}</td>
                  <td>{Udrive.title}</td>
                  <td>{Udrive.company_name}</td>
                  <td>{Udrive.location}</td>
                  <td>{Udrive.salary}</td>
                  <td>{Udrive.posted_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          )}

          {activeSection === "students" && (
             <table className="job-table">
             <thead>
               <tr>
                 <th>Student ID</th>
                 <th>First Name</th>
                 <th>Last name</th>
                 <th>Email</th>
                 <th>Phone Number</th>
                 <th>Branch</th>
               </tr>
             </thead>
             <tbody>
               {student.map((Pdrive, index) => (
                 <tr key={index}>
                   <td>{Pdrive.id}</td>
                   <td>{Pdrive.first_name}</td>
                   <td>{Pdrive.last_name}</td>
                   <td>{Pdrive.email}</td>
                   <td>{Pdrive.phone_number}</td>
                   <td>{Pdrive.stream}</td>
                 </tr>
               ))}
             </tbody>
           </table>
          )}

          {activeSection === "Partners" && (
             <table className="job-table">
             <thead>
               <tr>
                 <th>Job ID</th>
                 <th>Title</th>
                 <th>Company</th>
                 <th>Location</th>
                 <th>Salary</th>
                 <th>Posted Date</th>
               </tr>
             </thead>
             <tbody>
               {partnerdrive.map((Udrive, index) => (
                 <tr key={index}>
                   <td>{Udrive.job_id}</td>
                   <td>{Udrive.title}</td>
                   <td>{Udrive.company_name}</td>
                   <td>{Udrive.location}</td>
                   <td>{Udrive.salary}</td>
                   <td>{Udrive.posted_date}</td>
                 </tr>
               ))}
             </tbody>
           </table>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
