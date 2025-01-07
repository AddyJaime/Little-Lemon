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
    backgroundColor: "#F4CE14",
    padding: 10,
  },
  p: {
    textAlign: "center",
  },
});

export default LittleLemonFooter;
