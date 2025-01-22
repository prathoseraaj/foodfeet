import React from 'react'
import './Fooditems.css'
import { assets } from '../../assets/frontend_assets/assets'

const Fooditems = ({id,name,price,description,image}) => {
  return (
    <div className='fooditem'>
        <div className='food-item-image-container'>
            <img className='food-item-image' src={image} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p className=''>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default Fooditems