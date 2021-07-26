import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../styles/Form.css';

const ResetPasswordForm = ()=>{

    const emailRef = useRef();
    const [message,setMessage] = useState('');

    const { passwordReset } = useAuth();
    const history = useHistory();

    const passwordHandler = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        setMessage('');
        passwordReset(email)
            .then((ref)=>{
                history.push('/accounts/signIn');
            })
            .catch((err)=>{
            })
    }

    return(
        <div>
            <h1>StackQA</h1>
            <form className="form-root" onSubmit={passwordHandler}>
                <input type="text" ref={emailRef} className="input-box"/>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ResetPasswordForm;