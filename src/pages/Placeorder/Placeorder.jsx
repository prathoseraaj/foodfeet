import React from 'react'
import './Placeorder.css'

const Placeorder = () => {
  return (
    <form className='placeorder'>
      <div className="placeorder-left">
        <p className='title'>Delivery information</p>
        <div className="multifields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multifields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="placeorder-right">

      </div>
    </form>
  )
}

export default Placeorder