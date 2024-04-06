import React, { useState } from 'react';
import logo from '../assets/image/logo.png';
import '../Login/Login.css'
import {useNavigate} from 'react-router-dom';

export default function Login(){
    const[userName,setuserName]=useState('');
    const[password,setPassword]=useState('');
    const[showPopUp,setShowPopup]=useState(false);
    const[error,setError]=useState('');
    const navigate=useNavigate();

    const handleLogin=()=>{
        if(userName==='nisha@123' && password==='123456'){
            setShowPopup(true);
            setError('');
        }
        else{
            setError('Invalid Credentials'); 
        }
    }
    
     const handleOk=()=>{
        navigate('/')
     }
    return(
    <div className='login-container'>
        <img className='image' src={logo} alt="logo"/>
        <h2>User Login</h2>
        <input type='text' placeholder='Enter your username' value={userName} onChange={(e)=>setuserName(e.target.value)}/>
        <input type='password' placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin} className='logbutton'>LOGIN</button>
        <p><i>NewUser?</i> <b>SignUp </b><span>Forgot Your Password?</span></p>
    
    {showPopUp &&(
        <div className='popup-container'>
        <p>Login suceessfully</p>
        <button onClick={handleOk} className='popup-button'>ok</button>
        </div>
    )}
    </div>
    )
}