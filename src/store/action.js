export const actions = {
  FETCH_DATA: 'FETCH_DATA',
  SAVE_DATA: 'SAVE_DATA',
  FETCH_FILTERED_DATA: 'FETCH_FILTERED_DATA'
};

export const fetchProductsData = () => ({
  type: actions.FETCH_DATA,
});
export const fetchFilteredProductsData = (mapFilter) => ({
  type: actions.FETCH_DATA,
  mapFilter,
});
export const saveProductsData = (data, gender, category, brand, season) => ({
  type: actions.SAVE_DATA,
  data,
  gender,
  category,
  brand,
  season,
});
