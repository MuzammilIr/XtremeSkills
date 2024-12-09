import React from "react";
import "../styles/pages/Login.css";

const Login = () => {
    return (
        <div className="login-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center">Login</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary">Login as Worker</button>
                                <button type="submit" className="btn btn-secondary">Login as Client</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
