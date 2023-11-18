const initialState = {
  list: null,
  loading: true,
  error: null
}
const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'FETCH_LIST_REQUESTE':
      return {
        list: [],
        loading: true,
        error: null
      }
    case 'FETCH_LIST_SUCCESS':
      return {
        list: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_LIST_FAILURE':
      return {
        list: [],
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer