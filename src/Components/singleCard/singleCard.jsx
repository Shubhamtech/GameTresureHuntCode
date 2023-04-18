import React,{useState} from "react";
import Styles from "./singleCard.module.css";
import Confetti from "react-confetti";
import soundFile from '../../assets/collectcoin.mp3';
import soundFile1 from '../../assets/notification.mp3';
import soundFile2 from '../../assets/tadaa.mp3';
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

function SingleCard({id,card,handelChoice,flipped,disabled,remClick,userIdd,username,useremail}){
   const [pass,setPass]=useState(false);
  // const[tonext,nextvalue]=useState(false);
   const audio = new Audio(soundFile);
   const audio1 = new Audio(soundFile1);
   const audio2 = new Audio(soundFile2);
   const navigate=useNavigate();
    const handelClick=()=>{
        
        audio.play();
       
       if(!disabled && remClick!=0){
        handelChoice(card);
       } 
       
      
        if(id===7){
            audio2.play();
         console.log(" well done you have decode your first clue1 ");
         setPass(!pass);
          //redirect to next clue

          
        }
        if(disabled===true || remClick==0){
            audio1.play();   
        }
        
    }
    const clickToNext=()=>{
        const db = getDatabase();
        set(ref(db, 'users/' + userIdd), {
          username:username,
          email: useremail,
           currlevel:2,
           status:'final win stage'
   
         });
        navigate("/clue2");
        
    }
   
    return (
        <div>
         {pass &&  <Confetti wind={0.05} gravity={0.1} />}
         {pass ? <button className={Styles.btnSide} onClick={clickToNext}>Go to next Clue</button> : null}
        <div className={Styles.card }  >
         
        <div className={flipped ? Styles.flipped : null}  > 
         <img className={Styles.front}  src={card.src}  alt="cardfront" />
         <img className={Styles.back}  src="/cover.png" onClick={handelClick} alt="cardback" />
        
         
        </div>
       </div>
      </div>
    );
}
export default SingleCard;