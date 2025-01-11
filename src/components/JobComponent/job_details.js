import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './job_details.css';

const JobDetails = () => {
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        // Simulate fetching job details (replace with actual data fetching logic)
        const jobs = {
            job1: { title: 'Job Title 1', company: 'Company Name 1', description: 'Detailed description for Job 1' },
            job2: { title: 'Job Title 2', company: 'Company Name 2', description: 'Detailed description for Job 2' }
        };

        setJobDetails(jobs[jobId]);
    }, [jobId]);

    if (!jobDetails) {
        return <div className="job-details">Loading job details...</div>;
    }

    return (
        <div className="job-details">
            <h2>{jobDetails.title}</h2>
            <p><strong>Company:</strong> {jobDetails.company}</p>
            <p>{jobDetails.description}</p>
        </div>
    );
};

export default JobDetails;
