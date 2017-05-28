const INITIAL_STATE = {
  text: '',
  price: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_PRODUCT':
      return Object.assign({}, state, [action.payload.prop]: action.payload.value)
    default:
      return state
  }
}
