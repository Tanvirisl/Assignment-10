import React, { useEffect, useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
const Signup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
      console.log(user);

    const [info, setInfo] = useState({
        email: "",
        password: "",
        confirmPassword:""
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
            setError({ ...error, password: 'Minimum 6 characters' });
            setInfo({ ...info, password: "" })
        }
    }
    const handleConfirmPassword =(event)=>{
        if(event.target.value === info.password){
            setInfo({...info, confirmPassword: event.target.value});
            setError({...error, password:''});
        }
        else{
            setError({...error, password:'Password don`t match'});
            setInfo({...info, confirmPassword:""})
        }
    }


    const handleSingUpSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(info.email, info.password)
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
    const navigateLogin = () =>{
        navigate('/login')
    }

    useEffect(()=>{
        if(user){
            navigate('/home');
        }
    },[user]);


    return (
        <div className='login-main-container'>
            <div className='title'>SignUp</div>
            <form onSubmit={handleSingUpSubmit}>
                <input onChange={handleEmail} type="email" placeholder='Your Email' /><br />
                <p className='text-danger'>{error.email}</p>
                <input onChange={handlePassword} type="Password" placeholder='Your Password' /><br />
                <p className='text-danger'>{error.password}</p>
                <input type="password" onChange={handleConfirmPassword} placeholder='Confirm-password'/><br />
                <p></p>
                <button>Signup</button>
                <SocialLogin></SocialLogin>
                <h6 onClick={navigateLogin}>Login</h6>
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default Signup;