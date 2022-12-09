import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdCheck, MdClear } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import {motion} from "framer-motion"

const EventData = (params) => {

    const [searchparams]=useSearchParams();
    const [data,setData] = useState([{}]);
    const [coordinators, setCoordinators] = useState([{}]);
    const [volunteers, setvolunteers] = useState([{}]);

    useEffect(() => {
        (async()=>{
            console.log(searchparams.get("id"));
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:1008/volunteer/events/data',
                    credentials: true,
                    params: {
                        name: searchparams.get("id"),
                    }
                });
                if(!response.error){
                    console.log(response.data.details);
                    setData(response.data.details);
                    setCoordinators(response.data.coordinators);
                    setvolunteers(response.data.volunteers);
                    console.log(data)
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
            <motion.div className="profile">
                <h3>{data[0].Name}</h3>
                <p><button className="value">Starts On</button>{data[0].start}</p>
                <p><button className="value">Ends On</button>{data[0].end}</p>
                <p>Description</p>
                <p className="event-description"></p>
                <div className="event-coordinators">
                   <p>
                    Event Coordinators {coordinators.map((user) => (
                                <p className="event-value-2">
                                        {user.Name}
                                    </p>
                        ))}
                   </p>
                </div>

                <div className="participating-volunteers">
                   <p>
                    Participating Volunteers {volunteers.map((user) => (
                                <p className="event-value-2">
                                        {user.Name}
                                    </p>
                        ))}
                   </p>
                </div>
            </motion.div>
            <Footer />
        </motion.div>
    )
}

export default EventData