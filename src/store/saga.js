import getData from '../Services/productApi';
import { saveProductsData } from './action';
import {actions} from './action'
import { put,takeLatest } from 'redux-saga/effects';

function* fetchProductsData() {
  try {
    console.log("data to be fetched");
    const dataFetched = yield getData();
    console.log(dataFetched);
    yield put(saveProductsData(dataFetched));
  } catch (error) {
    console.log(error);
  }
}

export default function* defaultProductSaga() {
  yield takeLatest(actions.FETCH_DATA, fetchProductsData);
}
