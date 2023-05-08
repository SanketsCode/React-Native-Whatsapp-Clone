import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ChatSettingScreens() {
  return (
    <View style={styles.container}>
      <Text>ChatSettingScreens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
