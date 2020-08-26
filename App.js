/**
 React Native 기본 컴포넌트 {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
 }
 */

import React from "react";
import { View, Text } from "react-native";
import LoginContainer from "./container/LoginContainer";
import LogoutContainer from "./container/ResisterContainer";
import CreateRoomContainer from "./container/CreateRoomContainer";
import BottomTab from "./container/LogoutContainer";
import MainContainer from "./container/homePage/MainContainer";
import Test from "./navigation/Test";
//import RootPage from "./navigation/RootPage";

function App() {
  return (
    <View>
      <LoginContainer />
      <LogoutContainer />
      <CreateRoomContainer />
      <BottomTab />
      <MainContainer />
      <Test />
    </View>
  );
}

export default App;

/**
 *
 */
