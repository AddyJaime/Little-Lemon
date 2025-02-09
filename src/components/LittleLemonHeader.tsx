import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    color: "black",
    padding: 70,
    paddingBottom: 10,
  },
});

export default LittleLemonHeader;
