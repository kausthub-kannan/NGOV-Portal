import React from "react";
import {Link} from "react-router-dom"

const AuthNavBar = () => {
    return(
        <div className="auth-navbar">
            <Link className="auth-navlinks" to="/">Home</Link>
            <Link className="auth-navlinks" to="/signIn">Register</Link>
            <Link className="auth-navlinks" to="/login">Login</Link>
            <Link className="auth-navlinks" to="/about">About</Link>
        </div>
    )
}

export default AuthNavBar