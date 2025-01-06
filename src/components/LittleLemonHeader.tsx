import React from "react";
import { View, Text, StyleProp, StyleSheet } from "react-native";

const LittleLemonHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1} numberOfLines={3}>
        Welcome
      </Text>
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "#F4CE14",
  },
  h1: {
    padding: 40,
    fontSize: 30,
    color: "black",
  },
  title: {
    fontWeight: "bold",
  },
});

export default LittleLemonHeader;
