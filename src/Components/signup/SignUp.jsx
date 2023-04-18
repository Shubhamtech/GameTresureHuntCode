import React,{useState} from "react";

import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../../firebase";
import styles from './signUp.module.css';
const SignUp=()=>{
    const navigate=useNavigate();
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
      });
      const [errorMsg,setError]=useState("");
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
     const collectData=()=>{     //to handdel submissions
        if(!values.name || !values.email || !values.pass){
            setError("fill all fields");
            return;
        }
        setError("");
         //console.log(values);
         setSubmitButtonDisabled(true);
         createUserWithEmailAndPassword(auth, values.email, values.pass).then(
            async(res)=>{
              setSubmitButtonDisabled(false);
              //console.log(res);
              const user=res.user;
             await updateProfile(user,{
               displayName:values.name,
              });
              console.log(user);
              navigate("/login");
           }
         ).catch((err)=>{
            setSubmitButtonDisabled(false);
            setError(err.message);
            //console.log("error",err)
         });
     };
    return (
     <>   
     <div className={styles.innerBox }>
        <div className={styles.register}>
            <h1 >Register</h1>
            <input className={styles.inputBox} type="text"
             onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
             placeholder="Enter Name" value={values.name}></input>
            
            <input className={styles.inputBox} type="email" 
            onChange={(event) =>setValues((prev) => ({ ...prev, email: event.target.value }))}
             placeholder="Enter Email" value={values.email}></input>
            
            <input  className={styles.inputBox} type="password" 
            onChange={(event) =>setValues((prev) => ({ ...prev, pass: event.target.value }))}
             placeholder="Enter Password" value={values.password}></input>
             
             <div className={styles.err}>
              <b className={styles.error}>{errorMsg}</b>
             </div>

             <div>
               <button onClick={collectData} disabled={submitButtonDisabled} className={styles.btn_container}>Sign Up</button>
            </div>
            
             
         </div> 

     </div>

   



     </>

     

        
    );

}
export default SignUp;