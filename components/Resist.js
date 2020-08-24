import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import ClientInfoBox from "./util/ClientInfoBox";
import Button from "./util/Button";

/**
 * 이름 : 회원가입 창
 * 요약 : 회원가입에 해당하는 요소를 화면에 띄운다.
          ID, PW1, PW2, EMAIL, CODE
 * 설명 : 
    View
      Login
      Resister
    Button
      회원등록
    Event
      onChanging -> text 변경
      submitCode -> 서버에 이메일 코드 요청 
      submitAll -> 서버에 입력한 정보 전송
 * 
 */
const Resist = ({ resister, onChanging }) => {
  const { id, pw1, pw2, email, code } = resister;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>회원등록</Text>
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
          <View style={layout.codeSubmit}>
            <Button>코드 전송</Button>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.submit}>
        <Button>회원가입</Button>
      </View>
    </View>
  );
};

export default React.memo(Resist);

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
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
  codeSubmit: {
    marginLeft: 1,
  },
});

/**
 * <Text style={layout.text}>코드 전송</Text>
 */
