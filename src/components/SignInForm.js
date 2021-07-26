import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../styles/Form.css';

const SignInForm = () =>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    const { signin } = useAuth();
    const history = useHistory();
    const { currentUser } = useAuth();

    const loginHandler = (e)=>{
        e.preventDefault();
        setError('');
        setLoading(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signin(email,password)
            .then((ref)=>{
                setLoading(false);
                history.push('/profile');
            })
            .catch((err)=>{
                setError(err.message);
                setLoading(false);
            })
    }

    return(
        <div>
            <h1>StackQA</h1>
            <form className="form-root" onSubmit={loginHandler}>
                <label className="label-box">Email</label>
                <input type="text" className="input-box" ref={emailRef}/>
                <label className="label-box">Password</label>
                <input type="Password" className="input-box" ref={passwordRef}/>
                <br/>
                <button type="submit">Login</button>
                <p><Link to="/accounts/resetPassword">Forgot Password?</Link></p>
            </form>
            {error && <p>{error}</p>}

        </div>
    );

}

export default SignInForm;