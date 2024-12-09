import React from "react";
import "../styles/pages/Home.css";

const Home = () => {
    return (
        <div className="home-page">
            <h1 className="text-center my-4">Browse Our Services</h1>
            <div className="container">
                <div className="row">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <img src="./assets/plumber.png" className="card-img-top" alt="Service" />
                                <div className="card-body">
                                    <h5 className="card-title">Service {index + 1}</h5>
                                    <p className="card-text">Find reliable professionals near you.</p>
                                    <a href="/services" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
