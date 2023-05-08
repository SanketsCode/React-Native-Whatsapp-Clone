import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";

export default function ChatListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sanket Sabale</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => {
          navigation.push("ChatScreen");
        }}
      />
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
