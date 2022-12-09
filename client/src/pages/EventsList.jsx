import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

const EventsList = (params) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        (async()=>{
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:1008/events/'+params.url,
                    credentials: true,
                });
                if(!response.error){
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
        <div>
            <NavBar user="Kausthub"/>
            <div className="profile" >
                <h3>{params.heading}</h3>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                    </tr>
                {data.map((event) => (
                            <tr>
                                <td>{event.Name}</td>
                                <td>{event.Status? "Completed" : "Ongoing"}</td>
                            </tr>
                            
                ))}
                </table>    
            </div>
            <Footer />
        </div>
    )
}

export default EventsList