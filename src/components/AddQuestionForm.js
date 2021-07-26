import '../styles/AddQuestionForm.css';
import { useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { DatabaseReference } from '../config/firebase';

const AddQuestionForm = ()=>{

    const questionRef = useRef();
    const { currentUser } = useAuth();
    const db = DatabaseReference.ref('questions');
    const db2 = DatabaseReference.ref('UserQuestions').child(currentUser.uid);

    const addQuestionHandler = (e) =>{
        e.preventDefault();
        const key = Date.now();
        const question = {
            question:questionRef.current.value,
            user:currentUser.uid,
            id:key
        };
        db.child(key).set(question)
            .then(()=>{
                console.log("Created new Item Successfully!");
            })
            db2.child(key).set(question)
            .then(()=>{
                console.log("Created new Item Successfully!");
            })    

    }

    return(
        <form className="add-question-form" onSubmit={addQuestionHandler}>
            <input type="text" placeholder="Post a Question" ref={questionRef}/>
        </form>
    );
}

export default AddQuestionForm;