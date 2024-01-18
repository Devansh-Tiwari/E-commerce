import React, { useEffect, useState } from 'react'

import { add } from '../store/cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../store/Productslice';

import { STATUS } from '../store/Productslice';

const Products = () => {

    const dispatch = useDispatch();
    const {data: products , status } = useSelector((state) => state.product);
    // const [products , setproduct] = useState([])

    useEffect(() => {

        // const fetctproduct = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');

        //     const data = await res.json();
        //     console.log(data);
        //     setproduct(data);
        // }
        // fetctproduct();

        dispatch(fetchproducts())

    } , []);

    const handleAdd  =(product)=>{
      dispatch(add(product));
    }

    if(status === STATUS.LOADING){
      return <h2>Loading.....</h2>
    }
    if(status === STATUS.ERROR){
      return <h2>somehting went wrong </h2>
    }
  return (
    <div className='productsWrapper '> 
      {
      products.map(product => (
        <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button onClick={() => handleAdd(product)} className='btn'> ADD to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products
