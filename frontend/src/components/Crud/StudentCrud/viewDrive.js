import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To access the ID from the URL

function ViewDrive() {
  // Use the useParams hook to capture the student's ID from the URL
  const { id } = useParams();
  console.log(id);
  const [drives, setDrive] = useState([]);
  console.log(drives);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the student details from the API based on the ID
    axios
      .get(`http://localhost:5000/drive/${id}`) // Replace with the actual backend API endpoint
      .then((response) => {
        setDrive(response.data); // Set the student data to state
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching student data: " + error.message);
        setLoading(false);
      });
  }, [id]); // Re-fetch the data whenever the ID changes

  // Show loading message while data is being fetched
  if (loading) return <div>Loading...</div>;

  // Show error message if there's an issue fetching the data
  if (error) return <div>{error}</div>;

  // Display the student details
  return (
    <div>
      <h1>Drive Details</h1>
      <div>
        <p>
          <strong> company name:</strong> {drives.company_name}
        </p>
        <p>
          <strong>Discription:</strong> {drives.description}
        </p>
        <p>
          <strong>Job-Title:</strong> {drives.title}
        </p>
        <p>
          <strong>Company location:</strong> {drives.location}
        </p>
        <p>
          <strong>employment_type:</strong> {drives.employment_type}
        </p>
        <p>
          <strong>Salary :</strong> {drives.salary}
        </p>
        <p>
          <strong>Registration Closing Date:</strong> {drives.closing_date}
        </p>
        <p>
          <strong>Skill Required For the Job:</strong> {drives.skills_required}
        </p>
        <p>
          <strong>Experience Required :</strong> {drives.experience_required}
        </p>
        <p>
          <strong>Job Category:</strong> {drives.job_category}
        </p>
        <p>
          <strong>Application Link:</strong> {drives.application_link}
        </p>
        <p>
          <strong>Company Type:</strong>{" "}
          {drives.company_type}
        </p>       
      </div>
    </div>
  );
}

export default ViewDrive;
