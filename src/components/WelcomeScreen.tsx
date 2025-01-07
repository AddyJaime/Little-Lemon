import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  h1: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
});

export default WelcomeScreen;
