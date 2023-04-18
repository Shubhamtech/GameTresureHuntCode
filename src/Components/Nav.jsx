import { alignProperty } from "@mui/material/styles/cssUtils";
import React from "react";
import {Link} from "react-router-dom";
const Nav=()=>{
    return (
       
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                
                <li><Link to="/logout">LogOut</Link></li>
               
                <li><Link to="/ Instructions"> Game Instructions</Link></li> 

                <div className="login-a">
                    <li><Link to="/AdminLogin">Admin Login</Link></li> 
                </div>
                
            </ul>

        
          
    );
}
export default Nav;