import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, deleteDoc, query, collection, where, getDocs, updateDoc, addDoc} from "firebase/firestore";
import {dataLoop, queryDocs} from '../handlerFunctions.js'
import firebaseConfig from "../firebaseConfig.js"
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Create Event
const createEvent = async(req,res) => {
    const evtInfo = req.body;
    const programCoorinators = evtInfo.programCoordinators;
    try {
        const docRef = await addDoc(collection(db, "events"), {
            Name: evtInfo.name,
            Status: true,
            start: evtInfo.start,
            end: evtInfo.end,
            description: evtInfo.description,
        });
        programCoorinators.forEach(async (coordinators)=> {
            await addDoc(collection(db, "events/"+docRef.id+"/program-coordinators"), {
                Name: coordinators,
            });
            const id = await queryDocs("users","Name",coordinators,false);
            await addDoc(collection(db,"users/"+id+"/coordinating-events"),{
                Name : evtInfo.name,
            });
        });
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

//Delete Event
const deleteEvent = async(req,res) => {
    const evtName = req.body.name;
    try{
        const evtID = await queryDocs("events","Name",evtName,false)
        await deleteDoc(doc(db, "events", evtID));
        res.send("Deleted")
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

//Update Event
const updateEvent = async(req,res) => {
    const evtName = req.body.name;
    const field = re.body.field;

    try{
        const evtID = await queryDocs("events","Name",evtName,false);
        if(field==="status"){
            await updateDoc(doc(db,"events",evtID),{
                status : evtInfo.value,
            });
            res.send("Status updated")
        }else{
            await updateDoc(doc(db,"events",evtID),{
                Name : evtInfo.value,
            });
            res.send("Name updated");
        }
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

export {createEvent, deleteEvent, updateEvent}

