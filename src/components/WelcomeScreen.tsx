import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
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
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    padding: 40,
    paddingBottom: 20,
  },
  regularText: {
    color: "#EDEFEE",
    textAlign: "center",
    marginVertical: 8,
    fontSize: 25,
    padding: 20,
  },
});

export default WelcomeScreen;
