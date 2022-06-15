import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
// import { URI } from "../api/uri";
import { LoaderTypes } from "../Action/loader_types";
import { AuthTypes } from "../Action/auth_types";
import {  ApiTypes } from "../Action/api_types";


//Login
function* login({ callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    // const url = `${process.env.REACT_APP_API_URL}/${URI.LOGIN}`;
    // const res = yield axios.post(url, payload);
   
    yield put({ type: AuthTypes.LOGIN_SUCCESS,data:{}});
  
    callback(true);
  } catch (e) {
    // callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP});
}

function* fetch({ callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    // const url = `${process.env.REACT_APP_API_URL}/${URI.LOGIN}`;
    // const res = yield axios.post(url, payload);
    yield axios.ApiTypes.get("https://resreq.in/api/users");
   
    yield put({ type: AuthTypes.LOGIN_SUCCESS,data:{}});
  
    callback(true);
  } catch (e) {
    // callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP});
}

//Logout
function* logout({callback}){
  yield put({type:LoaderTypes.LOADER_START});
 
  try{
    yield put({type:AuthTypes.LOGOUT_SUCCESS,data:{}})
    callback()
  }
  catch(e){


  }
}


export default function* AuthSaga() {
  yield takeEvery(AuthTypes.LOGIN_REQUEST, login);
  yield takeEvery(AuthTypes.LOGOUT_REQUEST,logout)
 
}
