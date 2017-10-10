import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      isAdmin: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Itsa hammer',
          price: 12.3
        },
        {
          productName: 'Naileee',  
          description: 'Itsa nail',
          price: 0.12
        }
      ]
    }
  }
  addProductToCartList = (newCart) => {
    const newCartList = [...this.state.productList]
    newCartList.push(newCart)
    this.setState({productList: newCartList})
  }

  deleteProductFromCartList = (id) => {
    const newCartList = [...this.state.productList]
    newCartList.splice(id, 1)
    this.setState({productList: newCartList})
  }

  addProductToProductList = (newProduct) => {
    const newProductList = [...this.state.productList]
    newProductList.push(newProduct)
    this.setState({productList: newProductList})
  }

  deleteProductFromProductList = (id) => {
    const newProductList = [...this.state.productList]
    newProductList.splice(id, 1)
    this.setState({productList: newProductList})
  }

  toggleIsAdmin = () => {
    this.setState({isAdmin: !this.state.isAdmin})
  }

  render () {
    return (
      <div>
        <h2><u>Shop.js</u></h2>
        <button onClick={this.toggleIsAdmin}>Toggle Admin</button>
        <div className="shop">
          <div className="products">
            {this.state.isAdmin
              ? <AdminView
                productList={this.state.productList}
                addProductToProductList={this.addProductToProductList}
                deleteProductFromProductList={this.deleteProductFromProductList}
              /> : <ShopView
                productList={this.state.productList}
              />} 

          </div>
          <div class="products">
          {<CartView 
            productList = {this.state.productList}
            addProductToCartList= {this.addProductToCartList}
            deleteProductFromCartList={this.deleteProductFromCartList}
          />}
        </div>  
        </div>
      </div>
    )
  }
}

export default Shop