import React from "react";
import "../styles/pages/Plumber.css";

const Plumber = () => {
    const reviews = [
        { id: 1, user: "Alice", comment: "Great service!" },
        { id: 2, user: "Bob", comment: "Very professional and on time." },
        { id: 3, user: "Charlie", comment: "Highly recommended!" },
    ];

    return (
        <div className="plumber-page">
            <div className="container">
                <div className="card p-4 my-4">
                    <h1 className="text-center">Tariq Khan</h1>
                    <p className="text-center">Plumber</p>
                    <p className="text-center">Location: [User's Area]</p>
                    <h3 className="mt-4">Reviews</h3>
                    <ul className="list-group">
                        {reviews.map((review) => (
                            <li className="list-group-item" key={review.id}>
                                <strong>{review.user}:</strong> {review.comment}
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-success">Send Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plumber;
