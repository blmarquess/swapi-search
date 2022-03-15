export default function reducer(state, action) {
  switch (action.type) {
  case 'DATA_API':
    return { ...state, data: action.payload };
  case 'ADD_FILTER_VALUE':
    return { ...state, filterByValues: [...state.filterByValues, action.payload] };
  case 'REMOVE_FILTER':
    return {
      ...state,
      filterByValues: [...state.filterByValues.filter(({ id }) => id !== action.payload)],
    };
  case 'SEARCH_BOX':
    return { ...state, filterByName: action.payload };
  default:
    return state;
  }
}
