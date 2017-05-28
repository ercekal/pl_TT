function getId(products) {
  return todos.reduce((maxId, product) => {
    return Math.max(product.id, maxId)
  }, -1) + 1
}

let todoReducer = function(products = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [{
          text: action.text,
          completed: false,
          id: getId(products)
        }, ...products]
    case 'COMPLETE_TODO':
      return products.map((product) => {
        return product.id === action.id ?
          Object.assign({}, product, {completed: !product.completed}) : product
      })
    case 'DELETE_TODO':
      return products.filter((product) => {
        return product.id !== action.id
      })
    default:
      return products;
  }
}

export default todoReducer
