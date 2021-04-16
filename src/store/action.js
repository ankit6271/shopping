export const actions = {
  FETCH_DATA: 'FETCH_DATA',
  SAVE_DATA: 'SAVE_DATA',
};

export const fetchProductsData = () => ({
  type: actions.FETCH_DATA,
});
export const saveProductsData = (data,gender,category,brand,season) => ({
  type: actions.SAVE_DATA,
  data,
  gender,
  category,
  brand,
  season,
});
