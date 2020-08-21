import React, { useEffect, useCallback } from "react";
import Resist from "../components/Resist";
import { useDispatch, useSelector } from "react-redux";
import { change_input } from "../modules/auth";

const ResisterContainer = () => {
  // Dispatch
  const dispatch = useDispatch();
  // 리덕스에서 데이터 가져오기.
  const { resister } = useSelector(({ clientInfos }) => ({
    resister: clientInfos.resister,
  }));

  // 리덕스 적용 확인.
  useEffect(() => {
    console.log("클라이언트 정보 : ", resister);
  }, [resister]);

  // 회원가입 기능 함수
  // 로그인, 패스워드, 패스워드 확인, 이메일, 이메일 인증 번호 입력
  const onChanging = useCallback((e, name) => {
    console.log("\n name: ", name);
    console.log(e.nativeEvent);
    const { text } = e.nativeEvent;

    dispatch(
      change_input({
        form: "resister",
        key: name,
        value: text,
      })
    );
  });

  return <Resist resister={resister} onChanging={onChanging} />;
};

export default ResisterContainer;
