export default function reducer(state, action) {
  switch (action.type) {
  case 'DATA_API':
    return { ...state, data: action.payload };
  case 'ADD_FILTER_VALUE':
    return { ...state, filterByValues: [...state.filterByValues, action.payload] };
  default:
    return state;
  }
}
