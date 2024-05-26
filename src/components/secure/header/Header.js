import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Constant from "./../../common/Constant"

import logo from "./../../../images/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header(props) {

    const navigate = useNavigate();

    const logout = async (event) => {
        event.preventDefault();

        const uri = Constant.getBackendLogoutUri();


        const data = {
            "status": false,
            "uid": "pravind.9@gmail.com"
        };
        await fetch(uri, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((response) => {
                if (response && response.status) {
                    localStorage.clear();
                    navigate("/");
                }
            }).catch((error) => {
                console.log("There is an exception during logout", error);
            });
    }

    return (
        <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src={logo} alt="Logo" className="App-logo border-radius-50" />
                    <span className="header-title">Chatroom</span>
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu-align" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" onClick={logout}>Logout</Link>
                        <Link className="nav-link" to="/registration">Sign-up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Header;
