import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'

const Home = () => {
    const [category, setCatogory] = useState('All');
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCatogory={setCatogory}/>
    </div>
  )
}

export default Home