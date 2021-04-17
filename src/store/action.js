export const actions = {
  FETCH_DATA: 'FETCH_DATA',
  SAVE_DATA: 'SAVE_DATA',
  FETCH_FILTERED_DATA: 'FETCH_FILTERED_DATA'
};

export const fetchProductsData = () => ({
  type: actions.FETCH_DATA,
});
export const saveProductsData = (data,filterData,gender, category, brand, season) => ({
  type: actions.SAVE_DATA,
  data,
  filterData,
  gender,
  category,
  brand,
  season,
});
