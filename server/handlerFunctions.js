import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js"

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataLoop=(snapshot, type)=>{
    const arrayIDs=[];
    const arrayData=[];
    snapshot.forEach((doc) => {
        arrayData.push(doc.data());
        arrayIDs.push(doc.id);
    });
    if(!type)
        return arrayIDs[0];
    else
        return arrayData;
}

const queryDocs = async(set,field,value,type=true,relation="==") => {
        try {
            const q = query(collection(db, set), where(field,relation,value));
            const querySnapshot = await getDocs(q);
            const data = dataLoop(querySnapshot, type);
            return data;
        } catch (error) {
            return error;
        }
   
}

export {queryDocs, dataLoop}