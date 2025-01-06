import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.h1}>Welcome to Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    color: "white",
  },
});

export default WelcomeScreen;
