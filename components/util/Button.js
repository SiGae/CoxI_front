import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const Button = ({ text, bgColor, fontColor }) => {
  return (
    <TouchableHighlight style={styles.btn} underlayColor="white">
      <Text
        style={[
          bgColor ? { backgroundColor: bgColor } : styles.text,
          fontColor ? { color: fontColor } : styles.text,
        ]}
      >
        {text}
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
  },
});
