import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Plumber from "./pages/Plumber";
import WorkerDashboard from "./pages/WorkerDashboard";
import "./styles/App.css";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content d-flex">
                    <Sidebar />
                    <div className="content p-3 flex-grow-1">
                        <Routes>
                            <Route path="/" element={<SplashScreen />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/jobs" element={<Jobs />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/plumber" element={<Plumber />} />
                            <Route path="/worker-dashboard" element={<WorkerDashboard />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
