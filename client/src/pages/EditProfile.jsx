import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { FaDumpster, FaPen, FaStar, FaTrash, FaUser} from "react-icons/fa";

const EditProfile = () => {
    return(
        <div>
            <NavBar user="Kausthub"/>
            <div className="profile" >
                <form className="profile-edit" action="">
                    <div>
                        <h2>Personal Details</h2>
                        <input className="form-input-edit" type="text" placeholder="UserName" />
                        <input className="form-input-edit" type="number" placeholder="Mobile Number" />
                        <input className="form-input-edit" type="text" placeholder="Availibility" />
                        <input className="form-input-edit" type="text" placeholder="Profession" />
                    </div>
                    <div>
                    <h2>Student Details</h2>
                        <input className="form-input-edit" type="text" placeholder="College" />
                        <input className="form-input-edit" type="text" placeholder="Course" />
                        <input className="form-input-edit" type="text" placeholder="Academics" />
                    </div>
                    <button className="auth-btn">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default EditProfile