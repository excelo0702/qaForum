import { useEffect, useState } from "react";
import { DatabaseReference } from "../config/firebase";

const Question = (props)=>{


    return(
        <p>{props.question.question}</p>
        
    );
}

export default Question;