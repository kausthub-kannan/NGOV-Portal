import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FaDumpster, FaPaperPlane, FaPen, FaStar, FaTrash, FaUser} from "react-icons/fa";

const Report = () => {
    return(
        <div>
            <NavBar user="Volunteer"/>
            <div className="profile rp" >
                <form className="report" action="">
                    <h3>Report</h3>
                    <input className="report-input" type="text" placeholder="Email"/>
                    <textarea className="report-input" placeholder="Report Deatils" name="report-details" rows="16"></textarea>
                    <button className="report-btn"><FaPaperPlane/> Send</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Report