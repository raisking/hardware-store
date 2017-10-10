import React, { Component } from 'react'
import EditSaleItem from './EditSaleItem'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      itemCurrentlyOnSale: 'A Hammer!',
      editSaleItem: false
    }
  }
  toggleEditSaleItem = () => {
    this.setState({ editSaleItem: !this.state.editSaleItem })
  }
  handleItemCurrentlyOnSaleChange = (event) => {
    this.setState({
      itemCurrentlyOnSale: event.target.value
    })
    //   this.state.itemCurrentlyOnSale = 
  }
  render() {
    return (
      <div>
        <h2><u>This is Header.js page</u></h2>
        <h1>Hardware Store</h1>
        <p>Currently On Sale: {this.state.itemCurrentlyOnSale}</p>
        <EditSaleItem
          toggleEditSaleItem={this.toggleEditSaleItem}
          handleItemCurrentlyOnSaleChange={this.handleItemCurrentlyOnSaleChange}
          editSaleItem={this.state.editSaleItem}
          itemCurrentlyOnSale={this.state.itemCurrentlyOnSale}
        />
      </div>
    )
  }
}

export default Header;
