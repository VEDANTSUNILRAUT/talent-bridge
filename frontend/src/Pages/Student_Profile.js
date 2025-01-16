import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentProfile = () => {
    const [profile, setProfile] = useState(null); // Change to null for better data handling

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:5000/student_profile')
            .then(response => {
                setProfile(response.data);  // Store the fetched data
            })
            .catch(error => console.error('Error:', error));
    }, []);

    // Show a loading message while the data is being fetched
    if (!profile) {
        return <p>Loading profile...</p>;
    }

    return (
        <div>
            <h2>Student Profile</h2>
            <p><strong>First Name:</strong> {profile.first_name}</p>
            <p><strong>Last Name:</strong> {profile.last_name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone Number:</strong> {profile.phone_number}</p>
            <p><strong>City:</strong> {profile.city}</p>
            <p><strong>Skills:</strong> {profile.skills}</p>
            <p><strong>Date of Birth:</strong> {profile.dob}</p>
            <p><strong>Passing Year:</strong> {profile.passing_year}</p>
            <p><strong>Qualification:</strong> {profile.qaulification}</p>
        </div>
    );
}

export default StudentProfile;
