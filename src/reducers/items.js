const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItem = (name) => {
  return { type: ADD_ITEM, name }
}


export const removeItem = (index) => {
  return { type: REMOVE_ITEM, index }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_ITEM:
      return [action.name, ...state]
    case REMOVE_ITEM:
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1, state.length)
    ]
      default: 
       return state
   }
}
