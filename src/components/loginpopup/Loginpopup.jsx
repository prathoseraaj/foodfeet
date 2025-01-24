import React, { useState } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/frontend_assets/assets';
import { auth } from '../../firebase-config'; // Import Firebase Auth
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Loginpopup = ({ setShowlogin }) => {
  const [currentstate, setCurrentstate] = useState('Sign up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission for sign-up and login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (currentstate === 'Sign up') {
      // Handle sign-up
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setShowlogin(false); // Close login popup on successful sign-up
      } catch (error) {
        setError('Error creating account: ' + error.message);
      }
    } else {
      // Handle login
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setShowlogin(false); // Close login popup on successful login
      } catch (error) {
        setError('Error logging in: ' + error.message);
      }
    }
  };

  return (
    <div className="loginpopup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginpopup-input">
          {currentstate === 'Sign up' ? (
            <input
              type="text"
              placeholder="Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email} // Set email value
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password} // Set password value
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
        </div>
        <button type="submit">{currentstate === 'Sign up' ? 'Create Account' : 'Login In'}</button>
        {error && <p className="error-message">{error}</p>}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of Use & Privacy policy</p>
        </div>
        {currentstate === 'Sign up' ? (
          <p>
            Already have an Account?{' '}
            <span onClick={() => setCurrentstate('Login In')}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new Account?{' '}
            <span onClick={() => setCurrentstate('Sign up')}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
