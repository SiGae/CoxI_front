import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function App() {
  const { clientInfos } = useSelector(({ clientInfos }) => ({ clientInfos }));

  useEffect(() => {
    console.log("현재 사용자 정보 : ", clientInfos);
    console.log("오오 드디어!!");
  });

  return (
    <View style={styles.container}>
      <Text>LEE CHANG HYEON COMPANY </Text>
      <StatusBar style="auto" />
    </View>
  );
}
//node_modules/expo/AppEntry.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
