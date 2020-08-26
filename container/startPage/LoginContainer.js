import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "../../components/startPage/Login";

const LoginContainer = () => {
  const navigation = useNavigation();
  const resistScreen = () => navigation.navigate("Resister");

  return <Login resistScreen={resistScreen} />;
};

export default LoginContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  resister: {
    width: 300,
    height: 100,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },

  resisterText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "skyblue",
  },
});
