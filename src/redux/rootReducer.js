import { combineReducers } from "redux";
import SignInReducer from "./reducers/SignInReducer";
import DashboardReducer from "./reducers/DashboardReducer"

const rootReducer = combineReducers({
    signIn: SignInReducer,
    dashboard: DashboardReducer
});

export default rootReducer;