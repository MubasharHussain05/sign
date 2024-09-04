import { useState } from 'react';
import './Singin.css'
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const Singin = () => {
    const [action,setAction]=useState("")

    
  return (
    <>
    <div className='container'>
        <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
        </div>
        <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
                <FaRegUser className='img'/>
                <input type='text' placeholder='Name'/>
            </div>}
            
            <div className='input' >
                <MdEmail className='img'/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <RiLockPasswordFill className='img'/>
                <input type='password' placeholder='Password'/>
            </div>   
        </div>
        {action==="sign up"?<div></div>:<div className='forgot_password'>Lost password?<span>Click Here!</span></div>}
        
        <div className='submit_container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("sign up")}} >Sign Up</div>
                <div className={action==="sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
    </div>

    </>
  )
}
