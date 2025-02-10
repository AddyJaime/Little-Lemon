import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
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
      <Text style={styles.header}>
        <Text style={styles.highlight}> Little Lemon </Text>Maryland
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
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
    backgroundColor: "rgba(0, 4, 3, 0.03)",
    marginVertical: 100,
  },
  header: {
    marginVertical: 30,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonText: { fontSize: 17, color: "white", textAlign: "center" },
  button: {
    width: 120,
    height: 40,
    backgroundColor: "#1E6F50",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 150,
  },
  buttonNumberOne: {},
  backToLogin: {
    color: "black",
    fontSize: 20,
    margin: 10,
  },
  buttonPressed: { opacity: 0.5, transform: [{ scale: 0.95 }] },
  highlight: {
    color: "#1E6F50",
    fontWeight: "bold",
  },
});

export default HomeScreen;
