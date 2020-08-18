import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import createRequestSaga, {
  createRequestActionTypes,
} from "./saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as clientApi from "./api/loginResister";

/////////////////////////////// ACTION DEFINITION
// action parameter needed to login
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN"
);
// action parameter needed to resister
const [RESISTER, RESISTER_SUCCESS, RESISTER_FAILURE] = createRequestActionTypes(
  "auth/RESISTER"
);
// action parameter needed to change <input> element
const CHANGE_INPUT = "auth/CHANGE_INPUT";

///////////////////////////////////// ACTION
// login data to server
export const login = createAction(LOGIN, ({ id, pw }) => ({
  id,
  pw,
}));

// resister data to server
export const resister = createAction(RESISTER, ({ id, pw1, pw2, email }) => ({
  id,
  pw1,
  pw2,
  email,
}));

// Action changing the input contents
export const change_input = createAction(
  CHANGE_INPUT,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

///////////////////////////////// GENERATOR SAGA
// communication between client and server about login data
const loginSaga = createRequestSaga(LOGIN, clientApi.loginInfo);
// commnuication between client and server about resister data
const resisterSaga = createRequestSaga(RESISTER, clientApi.resisterInfo);

// MIDDLEWARE TO USE WHEN ACTION HAPPENED
export function* clientSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(RESISTER, resisterSaga);
}

// INITIAL STATE
const initialState = {
  login: {
    id: "",
    pw: "",
  },
  resister: {
    id: "",
    pw1: "",
    pw2: "",
    email: "",
  },
  session: "",
  error: false,
};

// REDUCER
const clientInfos = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: { session } }) => {
      return produce(state, (draft) => {
        draft.session = session;
      });
    },
    [LOGIN_FAILURE]: (state, { payload: { error } }) => {
      return produce(state, (draft) => {
        error: error;
      });
    },
    [CHANGE_INPUT]: (state, { payload: { form, key, value } }) => {
      return produce(state, (draft) => {
        draft[form][key] = value;
      });
    },
  },
  initialState
);

export default clientInfos;
