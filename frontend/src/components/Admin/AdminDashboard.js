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
  //console.log("Current drives:", activeDrives);
  const [upcomingCompany, setUpcomingCompany] = useState([]);
  const [partnerdrive, setpartnerdrive] = useState([]);
  const [coordinatorData, setCoordinatorData] = useState([]);
  const [student, setStudent] = useState([]);
  const [stats, setStats] = useState({});
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const profileResponse = await axios.get(
          "http://localhost:5000/admin-profile"
        );
        setAdminProfile(profileResponse.data);

        const drivesResponse = await axios.get("http://localhost:5000/current");
        setActiveDrives(drivesResponse.data);

        const upcomingCompany = await axios.get(
          "http://localhost:5000/upcoming"
        );
        setUpcomingCompany(upcomingCompany.data);

        const partnerCompany = await axios.get("http://localhost:5000/partner");
        setpartnerdrive(partnerCompany.data);

        const fetchStudentdata = await axios.get(
          "http://localhost:5000/student"
        );

        setStudent(fetchStudentdata.data);

        const fetchCoordinatorData = await axios.get(
          "http://localhost:5000/coordinator"
        );
        setCoordinatorData(fetchCoordinatorData.data);

        // Fetch dashboard stats
        const statsResponse = await axios.get(
          "http://localhost:5000/dashboard-stats"
        );
        setStats({
          registeredStudents: statsResponse.data.studentCount,
          currentCount: statsResponse.data.currentCount,
          upcomingCount: statsResponse.data.upcomingCount,
          partnerCount: statsResponse.data.partnerCount,
          coordinators: statsResponse.data.coordinatorCount,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAdminData();
  }, []);
  /// view pages
  const handleView = (id) => {
    navigate(`/view-student/${id}`);
  };
  const handleDrive = (id) => {
    navigate(`/view-drive/${id}`);
  };
  const handleCordinator = (id) => {
    navigate(`/view-cordinator/${id}`);
  };
  //

  //HandleRemove function
  const handleRemove = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        // Make DELETE request to the backend
        const response = await axios.delete(
          `http://localhost:5000/studentremove/${id}`
        );

        if (response.status === 200) {
          alert("Student deleted successfully!");

          // Optional: Remove student from local state to update the UI
          setStudent((prevStudents) =>
            prevStudents.filter((student) => student.id !== id)
          );
        }
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Failed to delete student. Please try again.");
      }
    }
  };

  //Removing the drive
  const handleDriveRemove = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        // Make DELETE request to the backend
        const response = await axios.delete(
          `http://localhost:5000/driveremove/${id}`
        );
        //for the Drive
        if (response.status === 200) {
          window.location.reload();
          alert("Drive deleted successfully!");
          // Optional: Remove student from local state to update the UI
          // not work setActiveTric update ui
          // setActiveDrives((prevDrives) =>
          //   prevDrives.filter((drive) => drive.id !== id)
          // );
        }
      } catch (error) {
        console.error("Error deleting Drive:", error);
        alert("Failed to delete Drive. Please try again.");
      }
    }
  };
  //Remove Upcomming Drive

  const handleupcommingDriveRemove = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        // Make DELETE request to the backend
        const response = await axios.delete(
          `http://localhost:5000/upcommingdriveremove/${id}`
        );
        //for the Drive
        if (response.status === 200) {
          window.location.reload();
          alert("Drive deleted successfully!");
          // setUpcomingCompany((prevDrives) =>
          //   prevDrives.filter((drive) => drive.id !== id)
          // );
        }
      } catch (error) {
        console.error("Error deleting Drive:", error);
        alert("Failed to delete Drive. Please try again.");
      }
    }
  };

  // Remove the Partner
  const handlePartnerDriveRemove = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        // Make DELETE request to the backend

        const response = await axios.delete(
          `http://localhost:5000/partnerremove/${id}`
        );
        //for the Drive
        if (response.status === 200) {
          window.location.reload();
          alert("Partner deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting Partner:", error);
        alert("Failed to delete Partner. Please try again.");
      }
    }
  };

  // Coordinater remove
  const handleCoordinaterDriveRemove = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        // Make DELETE request to the backend

        const response = await axios.delete(
          `http://localhost:5000/coordinaterremove/${id}`
        );
        //for the Drive
        if (response.status === 200) {
          window.location.reload();
          alert("coordinater deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting coordinater:", error);
        alert("Failed to delete coordinater. Please try again.");
      }
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: "🏠", section: "dashboard" },
    { name: "Students", icon: "👩‍🎓", section: "students" },
    { name: "Active Drives", icon: "📋", section: "active-drives" },
    { name: " Upcoming Drives", icon: "🏢", section: "companies" },
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
        <div className="admin-actions">
          <button
            className="admin-actions-btn"
            onClick={() => navigate("/add-student")}
          >
            Add Student
          </button>
          <button
            className="admin-actions-btn"
            onClick={() => navigate("/add-company")}
          >
            Add Company Drive
          </button>
          <button
            className="admin-actions-btn"
            onClick={() => navigate("/add-cordinator")}
          >
            Add Coordinator
          </button>
          <button className="admin-actions-btn" onClick={() => navigate("/")}>
            Home
          </button>
          <button
            className="admin-actions-btn"
            onClick={() => navigate("/job")}
          >
            Jobs
          </button>
          <button
            className="admin-actions-btn"
            onClick={() => navigate("/viewApplication")}
          >
            View Application
          </button>

          <button
            className="admin-actions-btn"
            onClick={() => navigate("/admin-profile")}
          >
            View Profile
          </button>
        </div>
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
                  item.section === "logout"
                    ? navigate("/")
                    : setActiveSection(item.section)
                }
              >
                <span>{item.icon}</span> {item.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <h2>{activeSection.toUpperCase()}</h2>
          {/* {activeSection !== "dashboard" && (
            <button className="mainbutton">
              ADD {activeSection.toUpperCase()}
            </button>
          )} */}

          {activeSection === "dashboard" && (
            <div className="dashboard-grid-container">
              <div className="stats-grid">
                <div className="stat-box red">
                  <h3>Registered Students</h3>
                  <p>{stats.registeredStudents}</p>
                </div>
                <div className="stat-box blue">
                  <h3>Current Companies</h3>
                  <p>{stats.currentCount}</p>
                </div>
                <div className="stat-box orange">
                  <h3>Upcoming Companies</h3>
                  <p>{stats.upcomingCount}</p>
                </div>
                <div className="stat-box green">
                  <h3>Partner Companies</h3>
                  <p>{stats.partnerCount}</p>
                </div>
                <div className="stat-box purple">
                  <h3>Coordinators</h3>
                  <p>{stats.coordinators}</p>
                </div>
              </div>
            </div>
          )}

          {/*  this is for the Active Drive */}
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
                  <th>Actions</th>
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
                    <td>
                      <button
                        className="view-button"
                        onClick={() => handleDrive(drive.job_id)}
                      >
                        View
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleDriveRemove(drive.job_id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* UpdommingDrive */}
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
                  <th>Actions</th>
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
                    <td>
                      <button
                        className="view-button"
                        onClick={() => handleDrive(Udrive.job_id)}
                      >
                        View
                      </button>
                      <button
                        className="remove-button"
                        onClick={() =>
                          handleupcommingDriveRemove(Udrive.job_id)
                        }
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* for the student information */}
          {activeSection === "students" && (
            <table className="job-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Branch</th>
                  <th>Actions</th>
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
                    <td>
                      <button onClick={() => handleView(Pdrive.id)}>
                        View
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleRemove(Pdrive.id)}
                      >
                        Remove
                      </button>
                    </td>
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
                  <th>Actions</th>
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
                    <td>
                      <button
                        className="view-button"
                        onClick={() => handleDrive(Udrive.job_id)}
                      >
                        View
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handlePartnerDriveRemove(Udrive.job_id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {activeSection === "coordinators" && (
            <table className="job-table">
              <thead>
                <tr>
                  <th>Coordinator ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Designation</th>
                  <th>Institution Name</th>
                  <th>Institution Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {coordinatorData.map((coordinator, index) => (
                  <tr key={index}>
                    <td>{coordinator.coordinator_id}</td>
                    <td>{coordinator.full_name}</td>
                    <td>{coordinator.email}</td>
                    <td>{coordinator.phone_number}</td>
                    <td>{coordinator.designation}</td>
                    <td>{coordinator.institution_name}</td>
                    <td>{coordinator.institution_email}</td>
                    <td>
                      <button
                        className="view-button"
                        onClick={() =>
                          handleCordinator(coordinator.coordinator_id)
                        }
                      >
                        View
                      </button>
                      <button
                        className="remove-button"
                        onClick={() =>
                          handleCoordinaterDriveRemove(
                            coordinator.coordinator_id
                          )
                        }
                      >
                        Remove
                      </button>
                    </td>
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
