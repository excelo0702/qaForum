import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../styles/Form.css';

const SignUpForm = () =>{

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const emailRef = useRef();
    const fullnameRef = useRef();
    const passwordRef = useRef();

    // dont know
    const { signup } = useAuth();

    const history = useHistory();

    const signupHandler = (event) =>{
        event.preventDefault();
        setError('');
        setLoading(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const fullName = fullnameRef.current.value;
        signup(email,password,fullName)
            .then((ref)=>{
                setLoading(false);
                history.push('/');
            })
            .catch((err)=>{
                setError(err.message);
                setLoading(false);
            });
    };

    return(
        <div >
            <h1>StackQA</h1>

        <form onSubmit={signupHandler} className="form-root">
            <label className="label-box">Email</label>
            <input type="text" ref={emailRef} className="input-box"/>
            <label className="label-box">Full Name</label>
            <input type="fullname" ref={fullnameRef} className="input-box"/>
            <label className="label-box">Password</label>
            <input type="password" ref={passwordRef} className="input-box"/>
            <br/>
            <button type="submit" >Sign Up</button>
        </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default SignUpForm;