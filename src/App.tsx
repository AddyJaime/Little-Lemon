import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// components
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./components/LoginScreen";
import MenuItems from "./components/MenuItems";
import LittleLemonFooter from "./components/LittleLemonFooter";
import HomeScreen from "./components/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuItems}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
