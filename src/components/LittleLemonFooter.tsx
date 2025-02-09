import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonFooter: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.p}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#1C4532",
    justifyContent: "center",
    padding: 20,
  },
  p: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});

export default LittleLemonFooter;
