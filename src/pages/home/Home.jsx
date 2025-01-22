import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'

const Home = () => {
    const [category, setCatogory] = useState('All');
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCatogory={setCatogory}/>
        <Fooddisplay category={category}/>
    </div>
  )
}

export default Home