import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "../../container/LoginContainer";
import ResisterContainer from "../../container/ResisterContainer";

const Stack = createStackNavigator();

function LoginScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Resister" component={ResisterContainer} />
    </Stack.Navigator>
  );
}

export default LoginScreen;
