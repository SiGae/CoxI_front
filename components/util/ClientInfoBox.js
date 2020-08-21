import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const ClientInfoBox = ({ name, type, value, onChanging }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={styles.textInput}
        name={name}
        secureTextEntry={type ? type : false}
        value={value}
        onChange={(e) => onChanging(e, name)}
        placeholder={`${name} 입력하세요`}
      />
    </View>
  );
};

export default ClientInfoBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    width: 100,
    fontSize: 17,
    textAlign: "center",
  },
  textInput: {
    flex: 2,
    backgroundColor: "white",
  },
});
