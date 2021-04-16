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
    yield put(saveProductsData(dataFetched, Array.from(gender), Array.from(category),Array.from(brand) , Array.from(season)));
  } catch (error) {
    console.log(error);
  }
}
function* fetchFilteredProductsData({mapData}) {
  console.log(mapData);
  try {
    const finalDataFetched=dataFetched?.products?.filter((value) => {
      for(let mapValue of mapData.values()){
        let arrayForMap=Array.from(mapValue);
        for(let i=0;i<arrayForMap.length;i++){
          if(value.gender===arrayForMap[i]){
            return value
          }
          else if(value.category===arrayForMap[i]){
            return value
          }
          else if(value.brand===arrayForMap[i]){
            return value
          }
          else if(value.season===arrayForMap[i]){
            return value
          }
        }
      }
    });
    yield put(saveProductsData(finalDataFetched));
  } catch (error) {
    console.log(error);
  }
}

export default function* defaultProductSaga() {
  yield takeLatest(actions.FETCH_DATA, fetchProductsData);
  yield takeLatest(actions.FETCH_FILTERED_DATA, fetchFilteredProductsData);

}
