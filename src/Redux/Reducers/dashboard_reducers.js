import { DashboardTypes } from "../Action/dashboard_types";

const initialState = {
  UserDataRequests: [],
};

export default function DashboardReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case DashboardTypes.USER_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        UserDataRequests: action.data
      };
    }
    case DashboardTypes.PERSON_REQUST_SUCCESS: {
      return {
        ...state,
        Persondata: action.data
      };
    }
    default:
      return state;
  }
}
