import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to Little Lemon</Text>
      <Text style={styles.p}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  p: {
    color: "#EDEFEE",
    textAlign: "center",
    paddingTop: 20,
    marginVertical: 20,
    fontSize: 25,
  },
});

export default WelcomeScreen;
