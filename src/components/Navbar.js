import React from 'react'
import { Link } from 'react-router-dom'
import  {useSelector} from 'react-redux';
const Navbar = () => {
  //redux use subscriber model means it sends the updated value automatically 
  // firstly we take whole state and then we take the state that we want to subscribe
  const items = useSelector((state ) => state.cart)

  return (
    <div style={{display:'flex' , alignItems:'center' , justifyContent: 'space-between'}}>
      <span>Redux Store</span>
      <div>
        <Link className="navlink" to="/"> Home</Link>
        <Link className="navlink" to="/cart">Cart</Link>
        <span className="cartcount"> cart item: {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar
