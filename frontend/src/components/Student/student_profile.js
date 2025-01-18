import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./student_profile.css";

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:5000/student_profile")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!profile) {
    return <p className="loading-message">Loading profile...</p>;
  }

  return (
    <div className="student-profile-container">
      <div className="student-profile-header">
        <button className="student-closebtn" onClick={() => navigate(-1)}>
          X
        </button>
        <h2>Student Profile</h2>
      </div>
      <div className="student-profile-details">
        <p className="profile-detail">
          <strong>First Name:</strong> {profile.first_name}
        </p>
        <p className="profile-detail">
          <strong>Last Name:</strong> {profile.last_name}
        </p>
        <p className="profile-detail">
          <strong>Email:</strong> {profile.email}
        </p>
        <p className="profile-detail">
          <strong>Phone Number:</strong> {profile.phone_number}
        </p>
        <p className="profile-detail">
          <strong>City:</strong> {profile.city}
        </p>
        <p className="profile-detail">
          <strong>Skills:</strong> {profile.skills}
        </p>
        <p className="profile-detail">
          <strong>Date of Birth:</strong> {profile.dob}
        </p>
        <p className="profile-detail">
          <strong>Passing Year:</strong> {profile.passing_year}
        </p>
        <p className="profile-detail">
          <strong>Qualification:</strong> {profile.qaulification}
        </p>
      </div>
    </div>
  );
};

export default StudentProfile;
