import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import clientInfos, { clientSaga } from "./_startPage/auth";

// resist all of reducer at this function.
const rootReducer = combineReducers({
  loading,
  clientInfos,
});

/**
 * all of saga communicating with server
 * have to be resistered at this function
 */
export function* rootSaga() {
  yield all([clientSaga()]);
}
export default rootReducer;
