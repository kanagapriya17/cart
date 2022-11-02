
import React, { useState } from 'react'

import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import "./App.css"
import data from ".//components/Data"
import { EightKPlusTwoTone } from '@mui/icons-material';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  

  const {products}=data;
  const onAdd=(product)=>{
const exist=cartItems.find((x)=>x.id===product.id);
if(exist){
  const newCartItems=cartItems.map((x)=>
  x.id===product.id?{...EightKPlusTwoTone,qty:exist.qty+1}:x);
  setCartItems(newCartItems);
}
  
  
  else{
    const newCartItems=[...cartItems,{...product,qty:1}];
    setCartItems(newCartItems);
  }
}
  
 
  return (
    <div>
   <Header countCartItems={cartItems.length}/>

    <div className="row">
    <Main onAdd={onAdd}  products={products}/>
   
    </div>
    </div>
  )
}

export default App;
