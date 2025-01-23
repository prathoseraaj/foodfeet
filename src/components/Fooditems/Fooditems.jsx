import React, { useContext} from 'react'
import './Fooditems.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/Storecontext';

const Fooditems = ({id,name,price,description,image}) => {

    const {addtocart,cartitems,removefromcart} = useContext(StoreContext);

  return (
    <div className='fooditem'>
        <div className='food-item-image-container'>
            <img className='food-item-image' src={image} alt="" />
            {!cartitems[id]
                ? <img className='add' src={assets.add_icon_white} onClick={() => addtocart(id)}/>
                : <div className='item-food-counter'>
                    <img onClick={() => removefromcart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartitems[id]}</p>
                    <img onClick={() => addtocart(id)} src={assets.add_icon_green} alt="" />
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