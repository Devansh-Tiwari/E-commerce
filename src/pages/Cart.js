import React from 'react'

//we get the data from the store using useSelector method
import {remove} from '../store/cartslice';

import { useSelector , useDispatch} from 'react-redux';
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const handleremove =(productId) =>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
            products.map(product => (
              <div key={product.id} className="cartCard">
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button className='btn' onClick={() => handleremove(product.id)}>Remove</button>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cart;
