import {put , takeLatest} from 'redux-saga/effects'

function* fetchData(){
    yield put({type: "hello"})
}

function* rootSaga(){
    yield takeLatest("XXX",fetchData);
}

export default rootSaga;