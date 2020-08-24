import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import MainContainer from "../container/MainContainer";
//import CreateRoomContainer from "../container/CreateRoomContainer";
import LoginScreen from "./screen/LoginScreen";
import LogoutContainer from "../container/LogoutContainer";
//import LoginContainer from "../container/LoginContainer";

// 앱 초기 화면 실행시 화면 제일 하단에 해당하는 TabBar생성
const Tab = createBottomTabNavigator();

const RootPage = () => {
  
  return (
    // 탭 바 생성 및 속성 지정.
    <Tab.Navigator
      tabBarOptions={{  
        // 탭 바 높이 지정
        style: {
          height: 50,
        },
        // 탭 바 폰트 크기 지정
        labelStyle: {
          fontSize: 20,
        },
      }}
    >
      {/** LoginScreen 등록 */}
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "login",
        }}
      />
      {/** LogoutContainer 등록 뷰 없이 바로 실행하기 때문. */}
      <Tab.Screen
        name="LogoutContainer"
        component={LogoutContainer}
        options={{ title: "logout" }}
      />
    </Tab.Navigator>
  );
};

export default RootPage;

/**
 * 

    /////////////
 *  initialRouteName="Login"
        screenOptions={{ gestureEnabled: false }}
 */
