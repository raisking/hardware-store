
import React from 'react'

const Product = ({ productName, quantity, price, description }) => {
  return (
    <div>
      <h2><u>Product.js</u></h2>
      <h3>{productName}</h3>
      <h4>${price}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Product