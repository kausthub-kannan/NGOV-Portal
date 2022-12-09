import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdCheck, MdClear } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import {motion} from "framer-motion"

const EventDataValid = (params) => {

    const [searchparams]=useSearchParams();
    const [start,setStart] = useState([{}]);
    const [end,setEnd] = useState([{}]);
    const [data,setData] = useState([{}]);
    const [coordinators, setCoordinators] = useState([{}]);
    const [requests, setrequests] = useState([{}]);
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
                    setrequests(response.data.requests);
                    setvolunteers(response.data.volunteers);
                }else{
                    console.log(response.error);
                }
            } catch (error) {
                console.log(error);
            }  
        }) ();
    },[])

    const acceptVolunteer = async(name, event)=>{
            console.log(searchparams.get("id"));
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:1008/request/accept',
                    credentials: true,
                    params: {
                        name: name,
                        event: event,
                    }
                });
                if(!response.error){
                    console.log(response.data)
                }else{
                    console.log(response.error);
                }
            } catch (error) {
                console.log(error);
            }
        }

        const declineVolunteer = async(name, event)=>{
            console.log(searchparams.get("id"));
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:1008/request/decline',
                    credentials: true,
                    params: {
                        name: name,
                        event: event,
                    }
                });
                if(!response.error){
                    console.log(response.data)
                }else{
                    console.log(response.error);
                }
            } catch (error) {
                console.log(error);
            }
        }

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition:{duration: 0.5}}}
        exit={{ opacity: 0 }}>
            <NavBar user={params.role}/>
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
                <div className="volunteer-requests">
                   <p>
                    Volunteer Requests{requests.map((user) => (
                            <div>
                                <p className="event-value-2">
                                        <button className="request-name">{user.Name}</button>
                                        <button onClick={() =>{acceptVolunteer(user.Name, data[0].Name)}} className="accept"><MdCheck/></button>
                                        <button onClick={() =>{declineVolunteer(user.Name, data[0].Name)}} className="decline"><MdClear/></button>
                                    </p>
                            </div>
                        ))}
                   </p>
                </div>
                
            </motion.div>
            <Footer />
        </motion.div>
    )
}

export default EventDataValid