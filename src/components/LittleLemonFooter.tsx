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
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
    // margin: 10,
  },
  p: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default LittleLemonFooter;
