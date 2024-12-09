import React from "react";
import "../styles/pages/Profile.css";

const Profile = () => {
    return (
        <div className="profile-page">
            <div className="container">
                <h1 className="text-center my-4">Your Profile</h1>
                <div className="card p-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="John Doe" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="johndoe@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="johndoe123" />
                    </div>
                    <button className="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
