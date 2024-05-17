import React from "react";
import "./Unsec.css";
import "bootstrap"

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Login from "../login/Login";

export default function LoginLayout(props) {
    return (
        <div id="unseContainer" className="d-flex flex-column min-vh-100">
           
            <Login />
           
        </div>

    );
}