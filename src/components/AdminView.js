import React, { Component } from 'react'
import Product from './Product'
import AdminForm from './AdminForm'

class AdminView extends Component {
  render () {
    return (
      <div>
         <h2>Create A New Product</h2>
        <AdminForm addProductToProductList={this.props.addProductToProductList} />
        
        <h2><u>AdminView.js page</u></h2>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <div>
          { this.props.productList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  quantity = {product.quantity}
                  price={product.price}
                  description={product.description}
                />
                <button onClick={() => 
                  this.props.deleteProductFromProductList(index)}>
                  Delete</button>
              </div>

            )
          }) }
        </div>
      </div>
    )
  }
}

export default AdminView