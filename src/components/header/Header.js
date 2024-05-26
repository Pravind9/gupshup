import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../images/logo/logo.png";
import profile from "../../images/logo/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Constant from "../common/Constant";
import { useLocalStorage } from "../common/useLocalStorage";

function Header(props) {

    const[loggedIn, setLoggedIn] = useLocalStorage("loggedIn", false);
    const[person, setPerson] = useLocalStorage("person", "");

    console.log("Header::LoggedIn ", loggedIn, " Header::person ", person);


    const navigate = useNavigate();


    const logout = async (event) => {
        event.preventDefault();

        const uri = Constant.getBackendLogoutUri();
        console.log("logout uri ", uri, JSON.stringify(person));



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
                    localStorage.setItem("authenticated", false);
                    localStorage.setItem("person", null);
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
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/registration">Sign-up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Header;
