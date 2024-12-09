import React from "react";
import "../styles/components/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/help">Help</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
