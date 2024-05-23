import React, { useState } from "react";
import logo from "../../../images/logo/logo.png";
import { Link } from "react-router-dom";

import "./Login.css";
import { Password } from "@react-login-page/base";

const Login = (props) => {

    const [data, setData] = useState({});


    const formSubmit = async (event) => {
        event.preventDefault();

        try {
            let uri = props.backend + props.create;
           
            const resp = await fetch(uri, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then((response) => {
                    console.log("response ", response);
                    if(response.status){
                        console.log("Redirect to Dashboard");
                    }else{
                        console.log("Hold to login Page!");
                    }
                });
        } catch (exception) {
            console.log("Exception while Login ", exception);
            throw new Error("Internal Server error");
        }
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
                    <input type="text" name="uid" id="userId"  placeholder="Username" required={true}
                        onChange={e => setData({ ...data, uid: e.target.value })} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" required={true}
                        onChange={e => setData({ ...data, password: e.target.value })} />
                </div>
                <button type="submit" className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
                <Link to="/forget">Forget password?</Link> or <Link to="/registration">Sign up</Link>
            </div>
        </div>
    );

}

Login.defaultProps = {
    backend: "http://localhost:3003",
    create: "/api/user/login"
}

export default Login;