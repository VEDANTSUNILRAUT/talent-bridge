import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./student_profile.css";

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // For toggling between view and edit mode
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Fields to exclude from being displayed
  const excludedFields = ["password","id"];

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:5000/student_profile")
      .then((response) => {
        setProfile(response.data);
        setFormData(response.data); // Initialize form data
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!profile) {
    return <p className="loading-message">Loading profile...</p>;
  }

  // Handle field changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle save changes
  const handleSave = () => {
    axios
      .put("http://localhost:5000/update_student_profile", formData) // Backend endpoint for updating the profile
      .then((response) => {
        setProfile(formData); // Update the profile with new data
        setIsEditing(false); // Exit edit mode
        //window.location.reload(true);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      });
  };

  // Logout Functionality
  const handleLogOut = () => {
    axios
      .get("http://localhost:5000/logout")
      .then(() => {
        navigate("/"); // Redirect to login after logout
        window.location.reload(true);
      })
      .catch((err) => {
        console.error("Logout Error:", err);
        alert("Logout failed. Please try again.");
      });
  };

  return (
    <div className="student-profile-container">
      <div className="student-profile-header">
        <button className="student-closebtn" onClick={() => navigate(-1)}>
          X
        </button>
        <h2>Student Profile</h2>
      </div>
      <div className="student-profile-details">
        {isEditing ? (
          // Edit mode
          <>
            {Object.keys(formData)
              .filter((key) => !excludedFields.includes(key)) // Exclude specific fields
              .map((key) => (
                <p className="profile-detail" key={key}>
                  <strong>{key.replace("_", " ").toUpperCase()}:</strong>
                  <input
                    type="text"
                    name={key}
                    value={formData[key] || ""}
                    onChange={handleChange}
                  />
                </p>
              ))}
            <button onClick={handleSave}>Save Changes</button>
          </>
        ) : (
          // View mode
          <>
            {Object.keys(profile)
              .filter((key) => !excludedFields.includes(key)) // Exclude specific fields
              .map((key) => (
                <p className="profile-detail" key={key}>
                  <strong>{key.replace("_", " ").toUpperCase()}:</strong> {profile[key]}
                </p>
              ))}
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </>
        )}
      </div>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default StudentProfile;
