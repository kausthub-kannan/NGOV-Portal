import { initializeApp } from "firebase/app";
import { doc, getFirestore, collection, getDocs,getDoc, deleteDoc, addDoc} from "firebase/firestore";
import {dataLoop, queryDocs} from '../handlerFunctions.js'
import firebaseConfig from "../firebaseConfig.js"

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Events Joined Data
const joinEvents = async (req,res) => {
    const id = req.query.id;
    try {
        const snap = await getDocs(collection(db, "users/"+id+"/joined-events"));
        const values = dataLoop(snap, true);
        res.send(values);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
//Requests sent by volunteers
const requestsRead = async (req,res) => {
    const id = req.query.id;
    try {
        const snap = await getDocs(collection(db, "users/"+id+"/coordinating-events"));
        const values = dataLoop(snap,true);
        console.log(values);
        res.send(values)
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}
//Events coordinating
const coordinatingEvents = async (req,res) => {
    const id = req.query.id;
    try {
        const snap = await getDocs(collection(db, "users/"+id+"/coordinating-events"));
        const values = dataLoop(snap, true);
        res.send(values);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}
//Events Accept
const reqAccept = async (req,res) => {
    const name = req.query.name;
    const event = req.query.event;
    try {
        const id = await queryDocs("events","Name",event,false)
        await addDoc(collection(db,"events/"+id+"/volunteers"),{
            Name : name,
        });
        const UserId = await queryDocs("users","Name",name,false)
        await addDoc(collection(db,"users/"+UserId+"/joined-events"),{
            Name : event
        });
        const q = "events/"+id+"/requests"
        const reqId = await queryDocs(q,"Name",name,false)
        await deleteDoc(doc(db, "events/"+id+"/requests/"+reqId));
        res.send("Accepted");
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

//Events decline
const reqDecline = async (req,res) => {
    const name = req.query.name;
    const event = req.query.event;
    try {
        const id = await queryDocs("events","Name",event,false)
        const q = "events/"+id+"/requests"
        const reqId = await queryDocs(q,"Name",name,false)
        await deleteDoc(doc(db, "events/"+id+"/requests/"+reqId));
        res.send("Declined");
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}
export {joinEvents, requestsRead, coordinatingEvents, reqAccept, reqDecline}