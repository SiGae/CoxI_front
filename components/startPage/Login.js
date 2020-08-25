import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

/**
 * 이름 : 로그인 View
 * 요약 : 로그인에 해당하는 View를 화면에 띄운다.
 * 설명 :
 *  View
 *    로그인
 *    회원가입
 *  Button
 *    회원가입
 *  Event Function
 *    resistScreen -> 회원가입 화면으로 이동
 * @param {네비게이션 함수}:function,
 *
 */
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
