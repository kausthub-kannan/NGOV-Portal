import React from "react";
import {Link} from "react-router-dom"
import { FaCheckCircle, FaPaperPlane, FaRegClock, FaUser, FaWrench} from "react-icons/fa"
import { MdCreate, MdLogout, MdManageAccounts, MdVolunteerActivism} from "react-icons/md"
import { TbQuestionMark } from "react-icons/tb"

const NavBar = (params) => {
    return(
        <div className="nav">
            <div className="navbar-2">
            <Link className="navlinks">{params.user}</Link>
            <Link className="navlinks link2" reloadDocument to="/events/completed"><FaCheckCircle /></Link>
            <Link className="navlinks link2" reloadDocument to="/events/ongoing"><FaRegClock /></Link>
            <Link className="navlinks" to="/logout"><MdLogout/></Link>
            </div>

            <div className="navbar-1">

            {params.user==='Volunteer'?
                (<div><Link className="navlinks" to="/volunteer/profile"><FaUser /></Link>
                <Link className="navlinks" to="/volunteer/volunteering"><MdVolunteerActivism /></Link>
                <Link className="navlinks" to="/volunteer/coordinating"><MdManageAccounts/></Link>
                <Link className="navlinks" to="/volunteer/report"><FaPaperPlane/></Link>
                <Link className="navlinks" to="/volunteer/coordinating/requested"><TbQuestionMark/></Link></div>):null}

            {params.user==='Admin'?
                (<div><Link className="navlinks" to="/admin/profile"><FaUser /></Link>
                    <Link className="navlinks" to="/admin/event/create"><MdCreate/></Link></div>):null}
            </div>
        </div>
    )
}

export default NavBar