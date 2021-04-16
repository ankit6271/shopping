import { all, fork } from 'redux-saga/effects';
import productSaga from "./saga"

export default function* rootSaga() {
    yield all([...Object.values(productSaga)].map(fork));
}