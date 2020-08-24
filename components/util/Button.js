import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

/**
 * 이름 : 버튼
 * 요약 : 화면에 버튼을 생성한다.
 * 설명 : 
      1. 넓이와 세로길이가 100%인 버튼을 생성한다.
      2. 버튼 안의 글자의 경우 가운데 정렬이 되어 나타난다.
 * 사용법 :
      <View>
        <Button>버튼이름</Button>
      <View>
    
    (feat.)
    View Size = Button Size 
 * @param {버튼이름, 버튼색상, 폰트색상}
 * 버튼 색상과 폰트 색상은 생략가능 => Default 색상 
 */
const Button = ({ children, bgColor, fontColor }) => {
  return (
    <TouchableHighlight style={styles.btn} underlayColor="white">
      <Text
        style={[
          bgColor ? { backgroundColor: bgColor } : styles.text,
          fontColor ? { color: fontColor } : styles.text,
        ]}
      >
        {children}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: "100%",
  },
  text: {
    height: "100%",
    backgroundColor: "skyblue",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    padding: 3,
  },
});
