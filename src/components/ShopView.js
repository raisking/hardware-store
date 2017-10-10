import React, { Component } from 'react'
import Product from './Product'
import AdminForm from './AdminForm'

class ShopView extends Component {
  render () {
    return (
      <div>
        <h2>Products</h2>
        <h2><u>ShopView.js </u></h2>
        <div>
          { this.props.productList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />

                <button onClick = {() => 
                this.props.addProductToProductList(index)}>
                Add to the Cart</button>

              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

export default ShopView
