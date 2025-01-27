import React, { useState, useEffect } from "react";

function ViewApplication() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="view-application-container">
      <h1>Job Applications</h1>
      <table className="job-table">
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Title</th>
            <th>Company Name</th>
            <th>Employment Type</th>
            <th>Salary</th>
            <th>Posted Date</th>
            <th>Closing Date</th>
            <th>Skills Required</th>
            <th>Experience Required</th>
            <th>Job Category</th>
            <th>Company Type</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.job_id}>
              <td>{job.job_id}</td>
              <td>{job.title}</td>
              <td>{job.company_name}</td>
              <td>{job.employment_type}</td>
              <td>{job.salary}</td>
              <td>{job.posted_date}</td>
              <td>{job.closing_date}</td>
              <td>{job.skills_required}</td>
              <td>{job.experience_required}</td>
              <td>{job.job_category}</td>
              <td>{job.company_type}</td>
              <td>
                <button className="view-button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewApplication;
