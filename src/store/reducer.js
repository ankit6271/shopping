const initialState = {
  filterData:null,
  data: null,
  gender: null,
  category: null,
  brand: null,
  season: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        filterData:action.data,
        data: action.data,
        gender: action.gender,
        category: action.category,
        brand: action.brand,
        season: action.season,
      };
    default: return state;
  }
};

export default reducer;
