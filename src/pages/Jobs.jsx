import React from "react";
import "../styles/pages/Jobs.css";

const Jobs = () => {
    return (
        <div className="jobs-page">
            <h1 className="text-center my-4">Your Jobs</h1>
            <div className="container">
                <div className="list-group">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <a href="#" className="list-group-item list-group-item-action" key={index}>
                            Job {index + 1} - Status: In Progress
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
