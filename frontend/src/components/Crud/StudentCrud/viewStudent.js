import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To access the ID from the URL

function ViewStudent() {
  // Use the useParams hook to capture the student's ID from the URL
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the student details from the API based on the ID
    axios
      .get(`http://localhost:5000/student/${id}`) // Replace with the actual backend API endpoint
      .then((response) => {
        setStudent(response.data); // Set the student data to state
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
      <h1>Student Details</h1>
      <div>
        <p>
          <strong>First Name:</strong> {student.first_name}
        </p>
        <p>
          <strong>Last Name:</strong> {student.last_name}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {student.phone_number}
        </p>
        <p>
          <strong>City:</strong> {student.city}
        </p>
        <p>
          <strong>State:</strong> {student.state}
        </p>
        <p>
          <strong>Skills:</strong> {student.skills}
        </p>
        <p>
          <strong>Date of Birth:</strong> {student.dob}
        </p>
        <p>
          <strong>Passing Year:</strong> {student.passing_year}
        </p>
        <p>
          <strong>Qualification:</strong> {student.qualification}
        </p>
        <p>
          <strong>Stream:</strong> {student.stream}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(student.created_at).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(student.updated_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default ViewStudent;
