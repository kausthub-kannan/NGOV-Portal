import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import axios from 'axios';
import {motion} from 'framer-motion';
import { createSearchParams, Navigate } from "react-router-dom";
import { FaInfo } from "react-icons/fa";

const AddEvent = (params) => {

    const [users, setUsers] = useState([]);
    const [coordinators, setCoordinators] = useState([]);
    const [info, setInfo] = useState({name:"", start:"", end:"", description:""})
    
    const select = (name) => {
        setCoordinators([...coordinators, name]);
        console.log(coordinators);
    }

    const sendData = async() => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:1008/admin/event/create',
                credentials: true,
                data: {
                    name: info.name,
                    start: info.start,
                    end: info.end,
                    description: info.description,
                    programCoordinators: coordinators
                }
            })
            if(!response.error){
                console.log(response.data);
                Navigate({
                    pathname: '/volunteer/event/data',
                    search: createSearchParams({
                        id: info.name,
                    }).toString()
                  })
            }
       } catch (error) {
            console.log(error);
       }
    }

    const change = (e) => {
        setInfo({...info, [e.target.name]: e.target.value}) 
    }

    useEffect(() => {
        (async()=>{
           try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:1008/userList',
                    credentials: true,
                })
                if(!response.error){
                    setUsers(response.data);
                }
           } catch (error) {
                console.log(error);
           }
        }) 
        ();
    },[])

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition:{duration: 0.5}}}
        exit={{ opacity: 0 }}>
            <NavBar user="Admin"/>
            <div className="profile" >
            <form className="profile-edit" action="">
                    <div>
                        <h2>Create Event</h2>
                        <input onChange={change} className="form-input-edit" name="name" type="text" placeholder="Event Name" />
                    </div>
                    <div>
                        <input onChange={change} className="form-input-edit"  name="start" type="text" placeholder="Start Date: DD/MM/YY"/>
                        <input onChange={change} className="form-input-edit"  name="end" type="text" placeholder="End Date: DD/MM/YY" />
                    </div>
                    <textarea onChange={change} className="event-description"   placeholder="Description" name="description" rows="5"></textarea>
                    <div className="participating-volunteers selected-coordinators">
                        <p>Selected Coordinators
                            {coordinators.map((name) => (
                                            <p onClick={() => {select(name)}} className="event-value-2">
                                                    {name}
                                                </p>
                                    ))}
                        </p>
                    </div>
                    <div className="participating-volunteers user-list">
                        <p><p>Select Coordinators</p>
                            <input className="search-bar" placeholder="Search" type="text" />
                            {users.map((name) => (
                                        <p onClick={() => {select(name)}} className="event-value-2">
                                                {name}
                                            </p>
                                ))}
                        </p>
                    </div>
                    <button onClick={() =>{sendData()}} className="auth-btn">Submit</button>
                </form>
            </div>
            <Footer />
        </motion.div>
    )
}

export default AddEvent