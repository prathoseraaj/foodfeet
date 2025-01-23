import React, { useCallback, useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/Storecontext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartitems, food_list, removefromcart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate()

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-item-title">
                    <p>items</p>
                    <p>title</p>
                    <p>type</p>
                    <p>quantity</p>
                    <p>total</p>
                    <p>remove</p>
                </div>
                <br />
                <hr />
                <br />
                {food_list.map((item, index) => {
                    if (cartitems[item._id] > 0) {
                        return (
                            < React.Fragment key={item._id}>
                                <div className='cart-item-title cart-items-item'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartitems[item._id]}</p>
                                    <p>{item.price * cartitems[item._id]}</p>
                                    <p onClick={() => removefromcart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </React.Fragment>
                        )

                    }
                })

                }
            </div>
            <div className="cart-bottom">
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
                            <p>${getTotalCartAmount()+2}</p>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
                </div>
                <div className="promocode">
                    <div>
                        <p>If you have promocode enter here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promocode'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart