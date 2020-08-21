import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

const Login = ({ resistScreen }) => {
  return (
    <View style={styles.container}>
      <Text>로그인 컨테이너</Text>
      <TouchableHighlight
        style={styles.resister}
        underlayColor="transparent"
        onPress={() => resistScreen()}
      >
        <Text style={styles.resisterText}>회원가입</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;

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
