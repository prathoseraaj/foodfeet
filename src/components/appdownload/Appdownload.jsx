import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <h2>
            For Better Experience Download <br /> FoodHub App
        </h2>
        <div className='appdownload-icons'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload