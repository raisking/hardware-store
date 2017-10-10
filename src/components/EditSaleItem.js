import React, { Component } from 'react'

class EditSaleItem extends Component {
  render () {
    return (
      <div>
        <h2><u>This is EditSaleItem.js page</u></h2>
        <button onClick={this.props.toggleEditSaleItem}>
          { this.props.editSaleItem ? 'Hide' : 'Edit Sale Item' }
        </button>
        <div>
          { this.props.editSaleItem
            ? <input type="text"
              placeholder={this.props.itemCurrentlyOnSale}
              onChange={this.props.handleItemCurrentlyOnSaleChange}
            />
            : null}
        </div>
      </div>
    )
  }
}

export default EditSaleItem