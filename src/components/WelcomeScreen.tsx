import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={true}
        indicatorStyle={"white"}
        style={styles.scrollView}
      >
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
    flex: 1,
  },
  h1: {
    color: "white",
    textAlign: "center",
    fontSize: 65,
  },
  p: {
    color: "#EDEFEE",
    textAlign: "center",
    paddingTop: 20,
    marginVertical: 20,
    fontSize: 38,
  },
  scrollView: {
    flexGrow: 1,
    padding: 50,
    backgroundColor: "#333333",
  },
});

export default WelcomeScreen;
