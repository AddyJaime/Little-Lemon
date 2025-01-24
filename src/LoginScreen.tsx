import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LoginScreen: React.FC = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [password, onChangePassoword] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.header}>Login to continue</Text>
        <TextInput
          style={styles.nameInput}
          value={firstName}
          placeholder="Enter your first name"
          onChangeText={onChangeFirstName}
        />

        <TextInput
          style={styles.passwordInput}
          value={password}
          placeholder="Enter your password "
          onChangeText={onChangePassoword}
          keyboardType={"phone-pad"}
          secureTextEntry={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
  nameInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    backgroundColor: "white",
  },
  passwordInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    backgroundColor: "white",
  },
});

export default LoginScreen;
