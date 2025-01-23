import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
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
