import React from "react";
import "../styles/pages/Services.css";

const Services = () => {
    const services = [
        "Plumbing", "Electrician", "Cleaning", "Carpentry", "Gardening", "Painting",
    ];

    return (
        <div className="services-page">
            <h1 className="text-center my-4">Available Services</h1>
            <div className="container">
                <ul className="list-group">
                    {services.map((service, index) => (
                        <li className="list-group-item" key={index}>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Services;
