import React from "react";
import { Route, Routes } from "react-router";
import "bootstrap"
import "./Layout.css";

import UnsecLayout from "../unsecure/layout/UnsecLayout";
import SecureLayout from "../secure/layout/SecureLayout";
import Login from "../unsecure/login/Login";
import Registration from "../register/Registration";
import Main from "../unsecure/main/Main";
import ForgetPass from "../unsecure/forget/ForgetPass";

export default function Layout(props) {
    return (
        <Routes path="/">
            <Route path="unsec" element={<UnsecLayout />}>
                <Route path="home" element={<Main />} />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />}/>
                <Route path="forget" element={<ForgetPass />} />
            </Route>
            <Route path="secure" element={<SecureLayout />} />
        </Routes>
    );
}