import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import ClientInfoBox from "./util/ClientInfoBox";
import Button from "./util/Button";

/**
 * UI
 *  ID
 *  PW1
 *  PW2
 *  EMAIL
 *  CODE
 */
const Resist = ({ resister, onChanging }) => {
  const { id, pw1, pw2, email, code } = resister;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>회원등록 컨테이너</Text>
      <View style={styles.layout}>
        <ClientInfoBox name="id" value={id} onChanging={onChanging} />
      </View>
      <View style={styles.layout}>
        <ClientInfoBox
          name="pw1"
          type={true}
          value={pw1}
          onChanging={onChanging}
        />
      </View>
      <View style={styles.layout}>
        <ClientInfoBox
          name="pw2"
          type={true}
          value={pw2}
          onChanging={onChanging}
        />
      </View>
      <View style={styles.layout}>
        <ClientInfoBox name="email" value={email} onChanging={onChanging} />
        <Text style={layout.text}>@changwon.ac.kr</Text>
      </View>
      <View style={styles.layout}>
        <ClientInfoBox name="code" value={code} onChanging={onChanging} />
        <TouchableHighlight style={layout.test}>
          <Text style={layout.text}>코드 전송</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.submit}>
        <Button text={"회원가입"} />
      </View>
    </View>
  );
};

export default React.memo(Resist);

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  submit: {
    width: "100%",
    height: 30,
    marginTop: 10,
  },
});

const layout = StyleSheet.create({
  test: {
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
  },
});
