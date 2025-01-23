import React, { useCallback, useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/Storecontext'

const Cart = () => {

    const { cartitems, food_list, removefromcart } = useContext(StoreContext);

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
        </div>
    )
}

export default Cart