// AdminDashboard.js

import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import Styles from "./AdminDashboard.module.css"


const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    // Fetch and listen for real-time updates from Firebase
    const fetchData = async () => {
     
       // const db = firebase.firestore();
        const dbRef = ref(db,"users");
        

        onValue(dbRef, (snapshot)=>{
             let records=[];
             snapshot.forEach(childsnapshot=>{
              const keyName=childsnapshot.key;
              const data=childsnapshot.val();
              console.log(data);
              records.push({"key":keyName,"data":data});
            });  
            setUserData(records);
           
         });

     
    };

   fetchData();
  }, []);

  return (
    <div className={Styles.userdashboard}>
      <h1>User Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>SLNo.</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Currentlevel</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user,index) => (
            <tr >
              <td>{index}</td>
              <td>{user.data.username}</td>
              <td>{user.data.email}</td>
              <td>{user.data.currlevel}</td>
              <td>{user.data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;