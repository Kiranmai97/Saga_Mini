import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../Redux/Reducers";
import RootSaga from "./Saga";




const sagaMiddleware = createSagaMiddleware();
const Store =createStore(RootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default Store;