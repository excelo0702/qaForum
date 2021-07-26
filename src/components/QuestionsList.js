import { Fragment } from "react";
import { useEffect, useState } from "react";
import { DatabaseReference } from "../config/firebase";
import Question from "./Question";


const QuestionsList = ()=>{
    const db = DatabaseReference.ref('questions');

    const [questionList,setQuestionList] = useState([]);


    useEffect(()=>{
        db.on('value',(snapshot)=>{
            let questions = snapshot.val();
            let list = questions && Object.keys(questions).map(idx=>questions[idx]);
            console.log(list);
            setQuestionList(list);
        })
    },[]);



    return(
        <Fragment>
            {questionList?.map((question)=>{
                console.log(question);
                return <Question key={question.id} question={question}/>
            })}
        </Fragment>
    );    
}

export default QuestionsList;