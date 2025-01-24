import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <ScrollView>
      <Text style={styles.header}>Login to continue</Text>
      <TextInput />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});

export default LoginScreen;
