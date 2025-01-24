import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

const LoginScreen: React.FC = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [password, onChangePassoword] = useState("");
  return (
    <ScrollView>
      <Text style={styles.header}>Login to continue</Text>
      <TextInput value={firstName} placeholder="Enter your first name" />

      <TextInput value={password} placeholder="Enter your password " />
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
