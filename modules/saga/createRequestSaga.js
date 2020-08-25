import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../loading";

// SUCCESS, FAILURE 코드 한 꺼번에 작성 할 때
// type엔 "액션 타입이 들어간다."
export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
};

// 서버에 데이터 요청 및 보낼 때 사용
// type: action, request: api주소
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (apiParam) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, apiParam.payload);
      //console.log("CALL", response.data);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
