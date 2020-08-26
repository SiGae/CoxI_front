import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "../../container/startPage/LoginContainer";
import ResisterContainer from "../../container/startPage/ResisterContainer";

// 누르면 다른 화면으로 이동하기 위해 스택 네비게이터 생성
const Stack = createStackNavigator();

function LoginScreen() {
  return (
    <Stack.Navigator>
      {/** Login창과 Resister창 등록 */}
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Resister" component={ResisterContainer} />
    </Stack.Navigator>
  );
}

export default LoginScreen;
