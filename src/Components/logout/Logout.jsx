import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styles from "./logOut.module.css";
const LogOut=()=>{
const navigate=useNavigate();
 const handelLogout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("logout sucessfully");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
 }
 return (
    <div>
    <h1>logout here folks!</h1>
     <div className={styles.btn}>

      <button onClick={handelLogout} className={styles.button87}>Logout</button>



     </div>
    </div>
 );
}
export default LogOut;