import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView indicatorStyle={"white"} style={styles.scrollView}>
        <Text style={styles.h1}>Welcome to Little Lemon</Text>
        <Text style={styles.p}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <Text style={styles.p}>
          Here’s some additional content to enable scrolling.
        </Text>
        <Text style={styles.p}>We love having you here!</Text>
        <Text style={styles.p}>Scroll down to see more.</Text>
      </ScrollView>
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
    fontSize: 65,
  },
  p: {
    color: "white",
    textAlign: "center",
    paddingTop: 20,
    marginVertical: 20,
    fontSize: 38,
  },
  scrollView: {
    padding: 50,
    backgroundColor: "black",
  },
});

export default WelcomeScreen;
