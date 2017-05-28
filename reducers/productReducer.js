function getId(state) {
  return state.products.reduce((maxId, product) => {
    return Math.max(product.id, maxId)
  }, -1) + 1
}

const INITIAL_STATE = {}
export default function(state = INITIAL_STATE, action) {
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
            Object.assign({}, product, {completed: !product.completed}) : product
        })
      })
    case 'DELETE_PRODUCT':
      return Object.assign({}, state, {
        products: state.products.filter((product) => {
          return product.id !== action.id
        })
      })
    default:
      return state;
  }
}
