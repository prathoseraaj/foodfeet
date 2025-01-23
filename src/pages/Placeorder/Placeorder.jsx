import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/Storecontext'

const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='placeorder'>
      <div className="placeorder-left">
        <p className='title'>Delivery information</p>
        <div className="multifields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="placeorder-right">
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button>Proceed to Payment</button>
          <br />
          <br />
        </div>
      </div>
    </form>
  )
}

export default Placeorder