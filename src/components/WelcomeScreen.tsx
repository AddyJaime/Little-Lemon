import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Welcome to Little
        <Text style={styles.h2}>Lemon</Text>
      </Text>
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
  h2: {
    color: "green",
  },
});

export default WelcomeScreen;
