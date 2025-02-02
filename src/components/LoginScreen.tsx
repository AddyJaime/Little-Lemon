import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [password, onChangePassoword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.welcomeText}>Welcome back</Text>
          <TextInput
            style={styles.nameInput}
            value={firstName}
            placeholder="Enter your first name"
            onChangeText={onChangeFirstName}
            clearButtonMode="always"
            editable={true}
          />

          <TextInput
            style={styles.passwordInput}
            value={password}
            placeholder="Enter your password "
            onChangeText={onChangePassoword}
            keyboardType={"phone-pad"}
            secureTextEntry={true}
            clearButtonMode="always"
          />

          <Pressable onPress={handleLogin}>
            <Text style={styles.button}>Login</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    paddingVertical: 100,
  },
  welcomeText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 20,
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
  button: {
    backgroundColor: "#EE9972",
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
    width: 100,
    marginHorizontal: 150,
  },
});

export default LoginScreen;
