import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.h1}>Welcome to Little Lemon</Text>
        <Text style={styles.p}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
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
    fontSize: 65,
    margin: 0,
  },
  p: {
    color: "white",
    textAlign: "center",
    paddingTop: 100,
    fontSize: 46,
    lineHeight: 70,
  },
  scrollView: {
    backgroundColor: "black",
    padding: 50,
  },
});

export default WelcomeScreen;
