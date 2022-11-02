import React from 'react'
import ShoppingCart from '@mui/icons-material/ShoppingCart';


function Header(props) {
  const{countCartItems}=props;
  return (
    <div className="row center block">
     <div>
      <a href="#/">
        <h2>simple shopping cart</h2>
      </a>
     </div>
     <div>
      <a href="#/cart"> cart <ShoppingCart/> </a>
      {countCartItems?(
      <button className="badge"> {countCartItems}</button>)
      :('')}
      
     
     </div>
    </div>
  )
}

export default Header
