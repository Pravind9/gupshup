import React from "react";
import logo from "../../../images/logo/logo.png";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = (props) => {
    
    const formSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <div className="wrapper">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-center mt-4 name">
                Login
            </div>
            <form className="p-3 mt-3" method="post" onSubmit={formSubmit}>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-user"></span>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" />
                </div>
                <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
                <Link to="/forget">Forget password?</Link> or <Link to="/registration">Sign up</Link>
            </div>
        </div>
    );

}


export default Login;