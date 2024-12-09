import React from "react";
import "../styles/pages/WorkerDashboard.css";

const WorkerDashboard = () => {
    const orders = [
        { id: 1, service: "Fixing a sink", status: "Completed", rating: 4.5 },
        { id: 2, service: "Installing pipes", status: "Completed", rating: 5.0 },
    ];

    const messages = [
        { id: 1, client: "Alice", message: "Can you come tomorrow?" },
        { id: 2, client: "Bob", message: "Thanks for the quick service!" },
    ];

    return (
        <div className="worker-dashboard">
            <div className="container">
                <h1 className="text-center my-4">Worker Dashboard</h1>

                <h3>Completed Orders</h3>
                <ul className="list-group mb-4">
                    {orders.map((order) => (
                        <li className="list-group-item" key={order.id}>
                            <strong>Service:</strong> {order.service} <br />
                            <strong>Status:</strong> {order.status} <br />
                            <strong>Rating:</strong> {order.rating} ★
                        </li>
                    ))}
                </ul>

                <h3>Messages</h3>
                <ul className="list-group">
                    {messages.map((msg) => (
                        <li className="list-group-item" key={msg.id}>
                            <strong>{msg.client}:</strong> {msg.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkerDashboard;
