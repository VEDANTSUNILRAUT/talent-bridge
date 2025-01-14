import React, { useEffect, useState } from "react";
import "./job_page.css";

function Job() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleClosePopup = () => {
    setSelectedJob(null);
  };

  const renderJobSection = (title, filterType) => {
    const filteredJobs = jobs.filter((job) => job.company_type === filterType);
    return (
      <div className="companies-section">
        <h2>{title}</h2>
        <div className="job-list">
          {filteredJobs.map((job) => (
            <div key={job.job_id} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.company_name}</p>
              <p>{job.location}</p>
              <p>{job.salary ? `$${job.salary}` : "Salary not specified"}</p>
              <div className="job-actions">
                <button
                  className="details-button"
                  aria-label={`View details of ${job.title} at ${job.company_name}`}
                  onClick={() => handleViewDetails(job)}
                >
                  View Details
                </button>
                <button className="apply-button" aria-label={`Apply for ${job.title} at ${job.company_name}`}>
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="job-page">
      <div className="job-header">
        <button className="filter-button" aria-label="Filter Jobs">Filter</button>
        <input
          type="text"
          className="search-box"
          placeholder="Search for jobs..."
          aria-label="Search Jobs"
        />
      </div>
      
      {renderJobSection("Upcoming Companies", "upcoming")}
      {renderJobSection("Current Companies", "current")}
      {renderJobSection("Partner Companies", "partner")}

      {selectedJob && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>{selectedJob.title}</h2>
            <p><strong>Job ID:</strong> {selectedJob.job_id}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            <p><strong>Company:</strong> {selectedJob.company_name}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Employment Type:</strong> {selectedJob.employment_type}</p>
            <p><strong>Salary:</strong> {selectedJob.salary ? `$${selectedJob.salary}` : "Salary not specified"}</p>
            <p><strong>Posted Date:</strong> {selectedJob.posted_date}</p>
            <p><strong>Closing Date:</strong> {selectedJob.closing_date}</p>
            <p><strong>Skills Required:</strong> {selectedJob.skills_required}</p>
            <p><strong>Experience Required:</strong> {selectedJob.experience_required}</p>
            <p><strong>Job Category:</strong> {selectedJob.job_category}</p>
            <p><strong>Application Link:</strong> <a href={selectedJob.application_link} target="_blank" rel="noopener noreferrer">{selectedJob.application_link}</a></p>
            <p><strong>Company Type:</strong> {selectedJob.company_type}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Job;
