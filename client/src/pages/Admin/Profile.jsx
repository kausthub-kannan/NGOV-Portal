import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FaDumpster, FaPen, FaStar, FaTrash, FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import {motion} from 'framer-motion'

const AdmProfile = (params) => {

    const [data,setData] = useState({});

    useEffect(() => {
        const handler = async()=>{
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:1008/admin/profile',
                    credentials: true,
                    params: {
                        id: "R50iApXBac3ykJK4KxY1"
                    }
                });
                if(!response.error){
                    console.log(response.data)
                    setData(response.data);
                }else{
                    console.log(response.error);
                }
            } catch (error) {
                console.log(error);
            }  
        } 
        handler();
    },[])

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition:{duration: 0.5}}}
        exit={{ opacity: 0 }}>
            <NavBar user="Admin"/>
            <div className="profile" >
                <p><button className="value">Email </button>{data.Name}</p>
                <p><button className="value">Mobile </button>{data.Mobile}</p>
                <p><button className="value">Availability </button>{data.Availability}</p>
                <p><button className="value">College</button>{data.College}</p>
                <p><button className="value">DOB </button>{data.DOB}</p>
                <p><button className="value">Course</button>{data.Course}</p>
                <div className="user-dp">
                    <p className="user-role">{data.role}</p>
                    <p className="user"><FaUser /></p>
                    <p className="points"><FaStar />{data.points}</p>
                    <button className="crud"><Link to="/profile/edit"><FaPen/></Link></button>
                    <button className="crud"><FaTrash/></button>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default AdmProfile