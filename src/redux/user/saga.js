import { all, takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure, fetchUsersBySuccess, fetchUsersByIdFailure } from './slice';

import axios from 'axios';

// API users: https://jsonplaceholder.typicode.com/users/

function* fetchUsers(){
  try{
    yield delay(2000);

    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
    yield put(fetchUsersSuccess(response.data))

  } catch(error){ 
    yield put(fetchUsersFailure(error.message))
  }
}

function* fetchUsersById(action){
  try{
    const userId = action.payload;
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
    yield put(fetchUsersBySuccess(response.data))

  } catch(error){
    yield put(fetchUsersByIdFailure(error.message))
  }
}

export default all([
  takeLatest("user/fetchUsers", fetchUsers),
  takeLatest("user/fetchUsersById", fetchUsersById)
]);
