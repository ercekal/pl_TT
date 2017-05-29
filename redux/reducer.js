function getId(state) {
  return state.products.reduce((maxId, product) => {
    return Math.max(product.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        products: [{
          text: action.text,
          price: action.price,
          id: getId(state)
        }, ...state.products]
      })
    case 'EDIT_PRODUCT':
      return Object.assign({}, state, {
        products: state.products.map((product) => {
          return product.id === action.id ?
            Object.assign({}, product, {
              text: action.text,
              price: action.price
            }) : product
        })
      })
    case 'DELETE_PRODUCT':
      return Object.assign({}, state, {
        products: state.products.filter((product) => {
          return product.id !== action.id
        })
      })
      case 'CANCEL_QUOTE':
        return Object.assign({}, state, {
          products: []
          })
    default:
      return state;
  }
}

export default reducer
