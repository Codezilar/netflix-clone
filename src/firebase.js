import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAkOcCtl8nHh9aTTcVK7bBFhrr_nr9Juw0",
  authDomain: "netflix-28c63.firebaseapp.com",
  projectId: "netflix-28c63",
  storageBucket: "netflix-28c63.appspot.com",
  messagingSenderId: "348113626919",
  appId: "1:348113626919:web:328c12b273cb9d6d0cab02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,

        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split('-').join(" "));     
    }
}

const logout = async () => {
    signOut(auth);
}

export {auth, db, login, signUp, logout};