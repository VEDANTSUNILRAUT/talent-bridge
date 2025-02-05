import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./job_page.css";

function AppliedJobsPage() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const studentId = localStorage.getItem("student_id");
    if (!studentId) {
      navigate("/login");
      return;
    }

    axios
      .get(`http://localhost:5000/students/${studentId}/applications`)
      .then((res) => setAppliedJobs(res.data))
      .catch((err) => {
        console.error("Error fetching applications:", err);
        alert("Failed to load applications.");
      });
  }, [navigate]);

  return (
    <div className="job-page">
      <h1>Your Applied Jobs</h1>
      <div className="job-list">
        {appliedJobs.map((job) => (
          <div key={job.job_id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.company_name}</p>
            <p>
              Status:{" "}
              <span className={`status-${job.status}`}>{job.status}</span>
            </p>
            <p>Applied on: {new Date(job.applied_at).toLocaleDateString()}</p>
            <button
              className="details-button"
              onClick={() => navigate(`/jobs/${job.job_id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppliedJobsPage;
