import React from "react";
import "./job_page.css";

function Job() {
  const jobs = [
    { title: "Frontend Developer", company: "Tech Corp", location: "Remote" },
    { title: "Backend Developer", company: "Innovate Ltd", location: "New York" },
    { title: "Full Stack Developer", company: "Dev Solutions", location: "San Francisco" },
    { title: "Data Analyst", company: "Analyze Co", location: "Chicago" },
    { title: "Machine Learning Engineer", company: "AI Pioneers", location: "Seattle" },
    { title: "UI/UX Designer", company: "Creative Studio", location: "Los Angeles" },
    { title: "Cloud Architect", company: "SkyHigh Tech", location: "Austin" },
    { title: "Cybersecurity Specialist", company: "SecureNet Inc", location: "Boston" }
  ];

  const upcomingCompanies = [
    { name: "Future Tech", date: "Starts Jan 15, 2025", industry: "Tech" },
    { name: "Green Solutions", date: "Starts Feb 1, 2025", industry: "Environment" },
    { name: "Healthify", date: "Starts Mar 10, 2025", industry: "Healthcare" },
    { name: "Eco Builders", date: "Starts Apr 5, 2025", industry: "Construction" },
    { name: "Quantum Innovations", date: "Starts May 20, 2025", industry: "Technology" }
  ];

  const currentCompanies = [
    { name: "Tech Corp", status: "Hiring Now", industry: "Tech" },
    { name: "Innovate Ltd", status: "Actively Recruiting", industry: "Finance" },
    { name: "Analyze Co", status: "Hiring Analysts", industry: "Data Analytics" },
    { name: "Dev Solutions", status: "Open for Applications", industry: "Software Development" },
    { name: "SecureNet Inc", status: "Looking for Specialists", industry: "Cybersecurity" },
    { name: "AI Pioneers", status: "Hiring Researchers", industry: "Artificial Intelligence" },
    { name: "Green Solutions", status: "Expanding Teams", industry: "Environment" }
  ];

  return (
    <div className="job-page">
      {/* Header Section */}
      <div className="job-header">
        <button className="filter-button" aria-label="Filter Jobs">Filter</button>
        <input
          type="text"
          className="search-box"
          placeholder="Search for jobs..."
          aria-label="Search Jobs"
        />
      </div>

      {/* Collaborating Companies Section */}
      <div className="collaborating-companies-section">
        <div className="sliding-company-names">
          {["Tech Corp", "Innovate Ltd", "Dev Solutions", "Analyze Co", "Future Tech", "Green Solutions"].map((company, index) => (
            <span key={index} className="sliding-company">
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* Upcoming Companies Section */}
      <div className="companies-section">
        <h2>Upcoming Companies</h2>
        <div className="company-list">
          {upcomingCompanies.map((company, index) => (
            <div key={index} className="company-card upcoming">
              <h3>{company.name}</h3>
              <p>{company.date}</p>
              <p>{company.industry}</p>
              <div className="job-actions">
                <button className="viewdetail-btn" aria-label={`View details of ${company.name}`}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Companies Section */}
      <div className="companies-section">
        <h2>Current Companies</h2>
        <div className="company-list">
          {currentCompanies.map((company, index) => (
            <div key={index} className="company-card current">
              <h3>{company.name}</h3>
              <p>{company.status}</p>
              <p>{company.industry}</p>
              <div className="job-actions">
                <button className="details-button" aria-label={`View details of ${company.name}`}>View Details</button>
                <button className="apply-button" aria-label={`Apply to ${company.name}`}>Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <div className="job-actions">
              <button className="details-button" aria-label={`View details of ${job.title} at ${job.company}`}>View Details</button>
              <button className="apply-button" aria-label={`Apply for ${job.title} at ${job.company}`}>Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;
