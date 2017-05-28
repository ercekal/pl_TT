let actions = {
  addProduct: function(text, price) {
    return {
      type: 'ADD_PRODUCT',
      text: text,
      price: price
    }
  },

  editProduct: function(id, text, price) {
    return {
      type: 'EDIT_PRODUCT',
      id: id,
      text: text,
      price: price
    }
  },

  updateProduct: function({ prop, value}) {
    return {
      type: 'EDIT_PRODUCT',
      payload: { prop, value }
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_PRODUCT',
      id: id
    }
  },

}

export default actions
