import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase"; 
import Clue1 from "./Clue1/Clue1";
import Login from "./login/Login";
function ProtectedComponent() {
    const navigate=useNavigate();
  const [user, setUser] = useState(null);
  //const []
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        //console.log(user.email);
      setUser(user);
    });

    return unsubscribe; // unsubscribe from the listener when the component unmounts
  }, []);

  if (user) {
  return ( <Clue1 userName={user.displayName} userId={user.uid} userEmail={user.email}/> );
    // navigate("/login");
  }

  return (
    <Login />
  );
}

export default ProtectedComponent;
