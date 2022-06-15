import { all } from "redux-saga/effects";
import AuthSaga from "../Saga/auth_saga";
import DashboardSaga from "../Saga/dashboard_saga";


export default function* RootSaga() {

  yield all([ AuthSaga(), DashboardSaga()]);
}


