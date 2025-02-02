import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Menu: undefined;
};

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to little lemon!!</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
  },
  buttonText: { fontSize: 18, color: "black" },
  button: {
    backgroundColor: "#EE9972",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default HomeScreen;
