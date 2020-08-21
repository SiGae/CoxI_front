import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import clientInfos, { clientSaga } from "./auth";

const rootReducer = combineReducers({
  loading,
  clientInfos,
});

export function* rootSaga() {
  yield all([clientSaga()]);
}
export default rootReducer;
