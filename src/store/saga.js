import getData from '../Services/productApi';
import { saveProductsData } from './action';
import { actions } from './action'
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProductsData() {
  const gender=new Set();
  const category =new Set();
  const brand= new Set();
  const season = new Set();
  try {
    const dataFetched = yield getData();
    dataFetched?.products?.map((value) => {
      gender.add(value.gender);
      category.add(value.category);
      brand.add(value.brand);
      season.add(value.season);
    });
    console.log(dataFetched.products);
    yield put(saveProductsData(dataFetched.products,dataFetched.products, Array.from(gender), Array.from(category),Array.from(brand) , Array.from(season)));
  } catch (error) {
    console.log(error);
  }
}
export default function* defaultProductSaga() {
  yield takeLatest(actions.FETCH_DATA, fetchProductsData);
}
