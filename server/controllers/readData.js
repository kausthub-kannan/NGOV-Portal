import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, deleteDoc, query, collection, where, getDocs, updateDoc, getDoc} from "firebase/firestore";
import {dataLoop, queryDocs} from '../handlerFunctions.js'
import firebaseConfig from "../firebaseConfig.js"

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//General Reads
//Read Completed Events
const readCompletedEvents = async (req,res) => {
    try {
        const values = await queryDocs("events","Status",true)
        console.log(values);
        res.send(values);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}
//Read Ongoing Events
const readOngoingEvents = async (req,res) => {
    try {
        const values = await queryDocs("events","status",false)
        console.log(values);
        res.send(values);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

//Read Event Data


//Admin Reads
//Read volunteers
const readVolunteers = async (req,res) => {
    try {
        const values = queryDocs("users","role","volunteers")
        console.log(values);
        res.send(values);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}
//Read Event Data

export {readCompletedEvents, readOngoingEvents, readVolunteers}