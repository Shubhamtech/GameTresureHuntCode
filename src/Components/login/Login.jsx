import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {getDatabase,set,ref} from 'firebase/database';
import ProtectedComponent from "../ProtectedComponent";
import {auth} from "../../firebase";
import {app} from "../../firebase";
import styles from './Login.module.css'
import { alignProperty } from "@mui/material/styles/cssUtils";

const Login=()=>{
    
    const navigate=useNavigate();
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
   
    const [values, setValues] = useState({
       
        email: "",
        pass: "",
      });
      const [errorMsg,setError]=useState("");
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
     const [userId,setUserId]=useState("");

     const collectData=()=>{     //to handdel submissions
        if( !values.email || !values.pass){
            setError("fill all fields");
            return;
        }
         setError("");
         //console.log(values);
         setSubmitButtonDisabled(true);
         
         const database=getDatabase(app);
         signInWithEmailAndPassword(auth, values.email, values.pass).then(
            async(res)=>{
              setSubmitButtonDisabled(false);
              //console.log(res.user.displayName);
             
              //setUserId(res.user.uid);
              console.log(userId);
              
               navigate("/ProtectedComponent");
              // return (<ProtectedComponent  />)
           }
         ).catch((err)=>{
            setSubmitButtonDisabled(false);
            setError(err.message);
            //console.log("error",err)
         });
     };
    return (
        
        <div className="con">
            <div className={styles.innerBox }>
              <div className={styles.register}>
              <h1 >Login Here!</h1>
              
              
              <input className={styles.inputBox} type="text" 
              onChange={(event) =>setValues((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="Enter Email" value={styles.email}></input>
              
              <input  className={styles.inputBox} type="password" 
              onChange={(event) =>setValues((prev) => ({ ...prev, pass: event.target.value }))}
              placeholder="Enter Password" value={styles.pass}></input>

              <div className={styles.buttom}>

              <div className={styles.err}>

              <b className={styles.error}>{errorMsg}</b>
              </div>

          
              
                    <button onClick={collectData} disabled={submitButtonDisabled} className={styles.btn}>Login</button>
              
              </div>
            </div> 
            </div>

        </div>

        
    );

}
export default Login;