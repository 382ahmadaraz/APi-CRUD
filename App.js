import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {fetchProducts} from "../src/store/productSlice";

export default function App() {
  const products = useSelector(store=>store.productSlice.products)
  const dispatch = useDispatch();
  // console.log("prdocuts in comp", products)
  dispatch(fetchProducts());

  // const onClickGetProducts = ()=>{
  //   alert('hello')
  // }
  <p id='title'>Rest APIs</p>
  return (
    <div className='container'>
      {products?.map(product=>{
        return <div key={product.id} className='card'>
          <img style={{width:200}} src={product.image} alt={product.title} />
          <h1 >{product.title}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
         <div> <button>Edit</button>
         <button>Delete</button></div>
          

        </div>
        
      })}

    </div>
  )
}