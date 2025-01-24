import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/frontend_assets/assets';

const Loginpopup = ({setShowlogin}) => {
    const [currentstate,setCurrentstate] = useState('Sign up');
  return (
    <div className='loginpopup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
              <h2>Sign Up</h2>
              <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='loginpopup-input'>
                {currentstate==='Sign up'?<input type="text" placeholder='Name' required /> : <></> }
                <input type="text" placeholder='Username' required/>
                <input type="text" placeholder='Password' required/>
            </div>
            <button>{currentstate === 'Sign up'? 'Create Account' : 'Login In'}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>By countinuing, I agree to the terms of Use & Privacy policy</p>
            </div>
            {currentstate==='Sign up'? <p>Already have an Account? <span onClick={()=>setCurrentstate('Login In')}>Login here</span></p> 
                                     : <p>Create a new Account? <span onClick={()=>setCurrentstate('Sign up')}>click here</span></p> }
        </form>
    </div>
  )
}

export default Loginpopup
