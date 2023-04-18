//import logo from './logo.svg';
import React, { useEffect,useState } from "react";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import SignUp from "./Components/signup/SignUp";
import Login from "./Components/login/Login";
import {auth} from "./firebase";
import './App.css';
import LogOut from "./Components/logout/Logout";
import Clue2 from "./Components/Clue2/Clue2";
import ProtectedComponent from "./Components/ProtectedComponent";
import Instructions from "./Components/Instructions";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import AdminLogin from "./Components/AdminDashboard/AdminLogin";

function App() {
  const [userName,setUserName]=useState("");   //const [isauthenticated,setisauthenticated]=usestate("")
  useEffect(()=>{
    //to know whether the user currently logedin or not
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName(""); //userissigned out
      }
      console.log(user);
    });
  },[])
  return (
    <div className="App">
    
    {/* <img src="./tresure2.jpg"  alt="logo" /> */}
    
    <BrowserRouter>
       <Nav />
      <h1>TresureThenHunt</h1>
      
      {/* <div className="section">
        <h1>TresureThenHunt</h1>
        <img src="./tresure2.jpg"  alt="logo" />
      </div> */}
      {/* <h3>Register to start Assesment Puzzle Game you can read game Instructions form above link  </h3> */}
      
       
        
      <Routes>
        <Route path="/logout" element={<LogOut />}/>
        {/* <Route path="/clue1" element={<Clue1 />}/> */}
        
        <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/login" element={<Login />}/>
         <Route exact path="/ProtectedComponent" element={<ProtectedComponent />}/> 
         <Route exact path="/clue2" element={<Clue2 />}/> 
         <Route exact path="/ Instructions" element={<Instructions />}/> 
         <Route exact path="/AdminLogin" element={<AdminLogin />}/> 
          
         <Route exact path="/AdminDashboard" element={<AdminDashboard />}/> 
         
         
      </Routes>
      
    </BrowserRouter>
    {/* <img src="./tresure2.jpg"  alt="logo" /> */}
     <div className="section">
     
     </div> 
    <Footer /> 
    </div>
  );
}

export default App;
