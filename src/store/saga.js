import getData from '../Services/productApi';
import { saveProductsData } from './action';
import { actions } from './action'
import { put, takeLatest } from 'redux-saga/effects';
import { useState } from 'react';

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
function* fetchFilteredProductsData(mapData) {
  try {
    const dataFetched = yield getData();
    dataFetched?.products?.map((value) => {
      for(let mapValue of mapData.values())
        if(value.gender===mapValue){
          
        }
        else if(value.category===mapValue){

        }
        else if(value.brand===mapValue){
          
        }
        else if(value.season===mapValue){
          
        }
      
    });
    yield put(saveProductsData(dataFetched, Array.from(gender), Array.from(category),Array.from(brand) , Array.from(season)));
  } catch (error) {
    console.log(error);
  }
}

export default function* defaultProductSaga() {
  yield takeLatest(actions.FETCH_DATA, fetchProductsData);
  yield takeLatest(actions.FETCH_FILTERED_DATA, fetchFilteredProductsData);

}
