import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import Loginpopup from './components/loginpopup/Loginpopup';

function App() {
  const [showlogin, setShowlogin] = useState(false);
  return (
    <>
    {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
      <div className="App">
        <Navbar setShowlogin={setShowlogin}/>
        <Routes>
          < Route path='' element={<Home/>}/>
          <Route path='' element={<Cart/>}/>
          <Route path='' element={<Placeorder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
