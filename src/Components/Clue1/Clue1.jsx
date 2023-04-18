import React, { useState } from "react";
import { positions } from '@mui/system';
import Styles from "./Clie1.module.css";
import SingleCard from "../singleCard/singleCard";
import {Alert,Avatar,Stack} from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const CardImg=[
    // {"src":"/cover.png"},
    {"src":"/emptybox.jpg"}
    // {"src":"/tresurebox.jpg"}
]

const Clue1=(props)=>{
  const navigate=useNavigate();
   const [cards,setCards]=useState([]);
   const [turns,setTurns]=useState(0);
   const  [choiceOne,setChoiceOne]=useState(null);
   const  [choiceTwo,setChoiceTwo]=useState(null);
   const [towardDisabled,setDisabled]=useState(0);
   const [doDisable,setDoDisable]=useState(false);
   const [remainClick,setRemainClick]=useState(4);

   
   const handelCardCollection=()=>{
    const cardCollection=[...CardImg, ...CardImg, ...CardImg, ...CardImg, ...CardImg, ...CardImg,{"src":"/tresurebox.jpg"} , ...CardImg, ...CardImg, ...CardImg, ...CardImg,...CardImg]
    .map((card,index)=> ({...card, id:index+1}));

   setCards(cardCollection);
    setTurns(0);
   }
  //   var restartGame=()=>{
  //     setValue({});

  //  }
  // console.log(cards,turns);
  const userName=props.userName;
  const email=props.userEmail;
  const userId=props.userId;
  
  
  console.log(userId);

    function writeUserData() {  //update realtime db 
      const db = getDatabase();
     set(ref(db, 'users/' + userId), {
       username:userName,
       email: email,
        currlevel:1,
        status:'pending'

      });
    }

   writeUserData();
   const handelChoice=(card)=>{
     //console.log(card);
    
     setDisabled(towardDisabled + 1 );
     console.log(towardDisabled);
     if(towardDisabled===3 && doDisable===false){
        setDoDisable(true);
     }
    
     setRemainClick(remainClick-1);
     if(remainClick===0 && doDisable===false){
      setDisabled(true);
     }
    //  if(remainClick===0){
    //     audio1.play();
    //  }
     //console.log(remainClick);
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
   }
   
   const handelRestart =()=>{
    setRemainClick(4);
    handelCardCollection();
    
    if(remainClick===0){
    setDoDisable(false);
    }
   }

   const Uname=props.userName;
    return (
        <>


            <div className={Styles.user_id}>
                <Stack direction="row" alignItems="center" gap={1} positions="right">
                    <h3> Welcome! {props.userName} </h3>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>{Uname.substr(0,2)}</Avatar>
                    <h6> 🐱‍👤 Clue1: Walk On The Hidden Tresure</h6>
                </Stack>
            </div>
          

           <div className={Styles.info}>
              <div className={Styles.in}>  You have Remaining Choices  {remainClick} </div>   <span><h3>your current level:-1</h3></span>  
           </div>
           
           


            <div className={Styles.buttons}>
               <button onClick={handelCardCollection}>Start the Game</button>
               <button onClick={handelRestart}>restartGame</button>
               
               
              
       

            </div>


            
           
           
           <div className={Styles.card_container}>

                <div className={Styles.Gridcard}>
                        
                        {cards.map( (card) => (
                            
                            <SingleCard  key={card.id} id={card.id} card={card} handelChoice={ handelChoice} flipped={card===choiceOne || card===choiceTwo}
                            disabled={doDisable} remClick={remainClick} userIdd={userId} username={userName} useremail={email}
                            />
                        ))}
                </div>

           </div>
        </>
    );
}
export default Clue1;