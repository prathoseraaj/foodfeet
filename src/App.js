// src/App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/Footer';
import React, { useState, useEffect } from 'react';
import Loginpopup from './components/loginpopup/Loginpopup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [showlogin, setShowlogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);

  useEffect(() => {
    if (!user) {
      setShowlogin(true);
    } else {
      setShowlogin(false);
    }
  }, [user]);

  return (
    <>
      {showlogin ? <Loginpopup setShowlogin={setShowlogin} /> : <></>}
      <div className="App">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
