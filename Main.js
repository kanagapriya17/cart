import React from 'react'
import Product from "../components/Product"


function Main(props) {
  const{products,onAdd,onRemove}=props;
  return (
    <div className='block col-1'>
     <h2>products</h2>
     <div className="row">
{products.map((product)=>(
  <Product Key={product.id} product={product}  onAdd={onAdd} onRemove={onRemove}></Product>

))}
     </div>
    </div>
  )
}

export default Main
