import { combineReducers } from "redux";
import LoaderReducer from "../Reducers/loader_reducer";
import AuthReducer from "../Reducers/auth_reducer";
import DashboardReducer from '../Reducers/dashboard_reducers';

const RootReducer = combineReducers({
  Loader: LoaderReducer,
  Auth: AuthReducer,
  Dashboard: DashboardReducer,
});

export default RootReducer;
