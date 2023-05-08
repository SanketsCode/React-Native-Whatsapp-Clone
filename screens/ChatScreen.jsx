import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import backgroundImage from "../assets/Images/droplet.jpeg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      ></ImageBackground>
      <View style={styles.inputContainer}>
        <Button title="Image" />
        <TextInput />
        <Button title="Camera" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
