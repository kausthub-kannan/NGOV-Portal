import React from "react";
import AuthNavBar from "../components/AuthNavBar";
import Footer from "../components/Footer";

const SignIn = () => {

    

    return(
        <div>
            <AuthNavBar />
            <form class="register-form">
                <h1>Register to Volunteer</h1>
                <input className="form-input" type="email" placeholder="Email"/>
                <input className="form-input" type="password" placeholder="Password"/>
                <div className="auth-btn-set">
                    <button className="auth-btn">Register</button>
                    <button className="auth-btn">Via Google</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default SignIn