import React from "react";
import { View, Text, StyleProp, StyleSheet } from "react-native";

const LittleLemonHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "#F4CE14",
  },

  title: {
    fontWeight: "bold",
    padding: 60,
    textAlign: "center",
    fontSize: 25,
  },
});

export default LittleLemonHeader;
