import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo/logo.png";
import profile from "../../images/logo/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Constant from "../common/Constant";
import { useLocalStorage } from "../common/useLocalStorage";

function Header(props) {

    const [loggedIn] = useLocalStorage("loggedIn", false);
    const [person] = useLocalStorage("person", "");
    const [logIn, setLogIn] = useState(true);

    console.log("Header::LoggedIn ", loggedIn, " Header::person ", JSON.stringify(person));


    const logout = async (event) => {
        event.preventDefault();

        const uri = Constant.getBackendLogoutUri();

        const data = {
            "status": false,
            "uid": person[0].uid
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
                    setLogIn(false);
                }
            }).catch((error) => {
                console.log("There is an exception during logout", error);
            });
    }

    useEffect(() => {
        if (!logIn) {
            const replace = Constant.getFrontEndContextPath();
            window.location.replace(replace);
        }
    }, [logIn])

    return (
        <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {loggedIn ? (
                    <Link className="navbar-brand" to="/chatroom">
                        <img src={profile} alt="Profile" className="App-logo border-radius-50" />
                        <span className="header-title">{person[0].dname}</span>
                    </Link>) : (<Link className="navbar-brand" to="/home">
                        <img src={logo} alt="Logo" className="App-logo border-radius-50" />
                        <span className="header-title">ChatApp</span>
                    </Link>)}
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
                        {loggedIn ? (<>
                            <Link className="nav-link active" aria-current="page" to="chatroom">Chat</Link>
                            <Link className="nav-link active" aria-current="page" to="profile">Profile</Link>
                            <Link className="nav-link" onClick={logout}>Logout</Link>
                        </>) : (<>
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            <Link className="nav-link" to="login">Login</Link>
                            <Link className="nav-link" to="registration">Sign-up</Link>
                        </>)}
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Header;
