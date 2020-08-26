import React, { useEffect } from "react";
import Main from "../../components/homePage/Main";

// 처음 시작 될
const MainContainer = () => {
  useEffect(() => {
    console.log("메인 컨테이너 입니다.");
  }, []);

  return <Main />;
};

export default MainContainer;
