import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore} from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebaseConfig.js"

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//General-SignIn
const signIn = async(req,res) => {
    const info = req.body;
    console.log(info)
    try {
        const response = await createUserWithEmailAndPassword(auth, info.email, info.password);
        try {
            await setDoc(doc(db, users, response.user.uid), {
                name: info.name,
                email: info.email,
                role: info.role,
            });
            res.sendStatus(200);
        } catch (error) {
            res.send(error);
        }
    } catch (err) {
        res.send(err.message);
    }
}

//General-LogIn
const logIn = async(req,res) => {
    const info = req.body;
    console.log(info)
    try {
        const response = await signInWithEmailAndPassword(auth, info.email, info.password);
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

export {signIn, logIn}