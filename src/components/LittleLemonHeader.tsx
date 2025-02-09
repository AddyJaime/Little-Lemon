import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}></Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#1C4532",
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    color: "white",
  },
});

export default LittleLemonHeader;
