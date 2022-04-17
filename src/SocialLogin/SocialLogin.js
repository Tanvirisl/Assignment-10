import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import googleLogo from'../image/googleLogo.png'
import './SocialLogin.css'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    if(user){
        navigate('/home')
    }
    return (
        <div onClick={()=>signInWithGoogle()} className='social-container'>
            <div className='socialLogin'>
                <img src={googleLogo} alt="" />
            </div>
            <h4>SignIn Google</h4>
        </div>
    );
};

export default SocialLogin;