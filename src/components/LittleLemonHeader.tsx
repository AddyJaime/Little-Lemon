import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#EE9972",
  },
  title: {
    fontWeight: "bold",
    padding: 30,
    textAlign: "center",
    fontSize: 25,
    marginVertical: 50,
  },
});

export default LittleLemonHeader;
