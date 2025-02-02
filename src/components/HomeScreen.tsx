import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { transform } from "@babel/core";

type RootStackParamList = {
  Menu: undefined;
  Login: undefined;
};

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Pressable
        // recibe el estado del botn
        style={({ pressed }) => [
          styles.buttonNumberOne,

          // buttonPressed se aplica solo cuando el boton esata presionado
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.backToLogin}>← Back to Login</Text>
      </Pressable>
      <Text style={styles.header}>Welcome to little lemon!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.buttonText}>Go to Menu</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  header: {
    marginVertical: 30,
    textAlign: "center",
    fontSize: 30,
  },
  buttonText: { fontSize: 17, color: "black", textAlign: "center" },
  button: {
    width: 120,
    height: 40,
    backgroundColor: "#EE9972",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 150,
    opacity: 0.5,
  },
  buttonNumberOne: {},
  backToLogin: {
    color: "blue",
    fontSize: 20,
    margin: 10,
  },
  buttonPressed: { opacity: 0.5, transform: [{ scale: 0.95 }] },
});

export default HomeScreen;
