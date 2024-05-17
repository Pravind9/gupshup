import React from "react";
import { Route, Router, Routes } from "react-router";
import "bootstrap"
import "./Unsec.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Login from "../login/Login";
import Registration from "../register/Registration";

export default function UnsecLayout(props) {
    return (
        <div id="unseContainer" className="d-flex flex-column min-vh-100">
            <Header title="Chatroom" subtitle="Lets connect" />
            <Routes>
                <Route path="/home" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
            <Footer note="Footer note" />
        </div>
    );
}