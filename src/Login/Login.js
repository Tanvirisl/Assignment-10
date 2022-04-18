import React, { useEffect, useState } from 'react';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [info, setInfo] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: "",
        Password: "",
        general: ""
    })
    const handleEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setInfo({ ...info, email: event.target.value });
            setError({ ...error, email: "" });
        }
        else {
            setError({ ...error, email: 'Invalid Email' });
            setInfo({ ...info, email: '' })
        }
    }

    const handlePassword = (event) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value)
        if (validPassword) {
            setInfo({ ...info, password: event.target.value });
            setError({ ...error, password: '' })
        }
        else {
            setError({ ...error, password: 'Invalid Password' });
            setInfo({ ...info, password: "" })
        }
    }


    const handleLoginSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(info.email, info.password);
    }

    useEffect(() => {
        if (error1) {
            switch (error1) {
                case "auth/invalid-email":
                    toast('Invalid email ! please valid email');
                    break;
                case 'auth/invalid-password':
                    toast('Wrong-password')
                    break;
                default:
                    toast('something-went-wrong')
            }
        }
    }, [error1])

    const navigateRegister = () => {
        navigate('/signup')
    }

    const location = useLocation();
    useEffect(() => {
        let from = location?.state?.from?.pathname || "/"
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPassword = async() => {
        await sendPasswordResetEmail(info.email);
        toast('Send Your Email')
    }
    return (
        <div className='login-main-container'>
            <div className='title'>LogIn</div>
            <form onSubmit={handleLoginSubmit}>
                <input onChange={handleEmail} type="email" placeholder='Your Email' /><br />
                <p className='text-danger'>{error.email}</p>
                <input onChange={handlePassword} type="Password" placeholder='Your Password' /><br />
                <p className='text-danger'>{error.password}</p>
                <button>Login</button>
                <ToastContainer></ToastContainer>
            </form>

            <SocialLogin></SocialLogin>
            <h6 onClick={navigateRegister}>Please Register</h6>
            <p>Forget Password <span style={{ cursor: "pointer" }} className='text-primary' onClick={resetPassword}>Reset Password</span></p>

        </div>
    );
};

export default Login;