import { initializeApp } from "firebase/app";
import { doc, getFirestore, collection, getDocs,getDoc, query, where} from "firebase/firestore";
import {dataLoop, queryDocs} from '../handlerFunctions.js'
import firebaseConfig from "../firebaseConfig.js"

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Profile
const profile = async (req,res) => {
    const id = req.query.id;
    console.log(id);
    try {
        const snap = await getDoc(doc(db, "users/"+id));
        res.send(snap.data());
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

//Read Event Data
const eventData = async (req,res) => {
    try {
        const name = req.query.name;
        console.log(name);
        const q = query(collection(db, "events"), where("Name","==",name));
        const snap0 = await getDocs(q);
        const details = dataLoop(snap0,true);
        const id= dataLoop(snap0, false);
        console.log(id);
        const snap1 = await getDocs(collection(db, "events/"+id+"/requests"));
        const requests = dataLoop(snap1, true);
        const snap2 = await getDocs(collection(db, "events/"+id+"/volunteers"));
        const volunteers = dataLoop(snap2, true);
        const snap3 = await getDocs(collection(db, "events/"+id+"/program-coordinators"));
        const coordinators = dataLoop(snap3, true);
        console.log({
            details: details,
            requests: requests,
            volunteers: volunteers,
            coordinators: coordinators,
        });
        res.send({
            details: details,
            requests: requests,
            volunteers: volunteers,
            coordinators: coordinators,
        })
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

//User List
const userList = async(req,res) => {
    try {
        const usersData = await queryDocs("users","points",100,true,">=");
        const userNames = [];
        usersData.forEach(user => {
            userNames.push(user.Name);
        });
        res.send(userNames);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

export {profile, eventData, userList}