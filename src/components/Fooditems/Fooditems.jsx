import React, { useContext, useState } from 'react'
import './Fooditems.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/Storecontext';

const Fooditems = ({id,name,price,description,image}) => {

    const [itemcount,setItemcount] =useState(0);
    const {addtocart,cartitems,removefromcart} = useContext(StoreContext);

  return (
    <div className='fooditem'>
        <div className='food-item-image-container'>
            <img className='food-item-image' src={image} alt="" />
            {!itemcount
                ? <img className='add' src={assets.add_icon_white} onClick={() => setItemcount(prev => prev+1)}/>
                : <div className='item-food-counter'>
                    <img onClick={() => setItemcount(prev => prev-1)} src={assets.remove_icon_red} alt="" />
                    <p>{itemcount}</p>
                    <img onClick={() => setItemcount(prev => prev+1)} src={assets.add_icon_green} alt="" />
                </div>
            }
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