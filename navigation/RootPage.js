import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import MainContainer from "../container/MainContainer";
//import CreateRoomContainer from "../container/CreateRoomContainer";
import LoginScreen from "./screen/LoginScreen";
import LogoutContainer from "../container/LogoutContainer";
//import LoginContainer from "../container/LoginContainer";

const Tab = createBottomTabNavigator();

const RootPage = () => {
  console.log("실행?");
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 50,
        },
        labelStyle: {
          fontSize: 20,
        },
      }}
    >
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "login",
        }}
      />
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
