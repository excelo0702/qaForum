import { useEffect, useState } from "react";
import { DatabaseReference } from "../config/firebase";

const Question = ()=>{
    const db = DatabaseReference.ref('questions');

    const [questionList,setQuestionList] = useState([]);

    useEffect(()=>{
        db.on('value',(snapshot)=>{
            const question = snapshot.val();
        })
    },[]);

    return(
        <p>Question List</p>
    );
}

export default Question;