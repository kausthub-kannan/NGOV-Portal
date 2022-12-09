import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { createSearchParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion"

const VolunteerEvents = (params) => {

    const [data,setData] = useState([]);
    const navigate=useNavigate();

    const eventInfo = (event) => {
          navigate({
            pathname: '/volunteer/event/data',
            search: createSearchParams({
                id: event,
            }).toString()
          })
    }

    useEffect(() => {
        (async()=>{
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:1008/volunteer/events/volunteering',
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
        }) ();
    },[])

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition:{duration: 0.5}}}
        exit={{ opacity: 0 }}>
            <NavBar user="Volunteer"/>
            <div className="event-list" >
                <h3>Volunteer's Dashboard</h3>
                <div>
                    <p><button className="event-name">Name</button> <button className="event-name">Starts On</button><button className="event-name">Ends On</button></p>
                    {data.map((event)=>(
                        <p>
                            <button onClick={() => {eventInfo(event.Name)}} className="event-name">{event.Name}</button>
                            <button className="event-name">10</button>
                            <button className="event-name">10</button>
                            <div className="horizontal-line">.</div>
                        </p>
                ))}
                </div>
                <div className="volunteer-requests description">
                    <p>Actions to be performed</p>
                    <p>Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default VolunteerEvents