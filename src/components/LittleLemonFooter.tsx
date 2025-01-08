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
    backgroundColor: "#F4CE14",
    justifyContent: "center",
    padding: 6,
  },
  p: {
    textAlign: "center",
    fontSize: 26,
  },
});

export default LittleLemonFooter;
