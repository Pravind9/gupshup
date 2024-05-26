import React from "react";
import { Route, Routes } from "react-router";
import "./SecureLayout.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Dashboard from "../../dashboard/Dashboard";
import Registration from "../../unsecure/register/Registration";
import Login from "../../login/Login"

function SecureLayout(props) {
    return (
        <div id="unseContainer" className="d-flex flex-column min-vh-100">
            <Header />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default SecureLayout;