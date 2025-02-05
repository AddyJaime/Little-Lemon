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
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
};

const LoginScreen: React.FC = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [password, onChangePassoword] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.textLogin}>Login</Text>
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
    width: 250,
    marginHorizontal: 80,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 10,
  },
  passwordInput: {
    height: 40,
    marginHorizontal: 80,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    backgroundColor: "white",
    width: 250,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#EE9972",
    padding: 10,
    borderRadius: 8,

    width: 100,
    marginHorizontal: 155,
    marginVertical: 10,
  },
  buttonPressed: {
    opacity: 0.1,
    transform: [{ scale: 0.95 }],
  },
  textLogin: {
    textAlign: "center",
  },
});

export default LoginScreen;
