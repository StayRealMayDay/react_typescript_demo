
import {all} from 'redux-saga/effects'
import testSaga from './modules/test/saga'


export default function*(){
    yield all([testSaga()])
}