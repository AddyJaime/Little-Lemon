import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// components
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./components/LoginScreen";
import MenuItems from "./components/MenuItems";
import LittleLemonFooter from "./components/LittleLemonFooter";
import HomeScreen from "./components/HomeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Login">
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Menu"
            component={MenuItems}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Tab.Screen>
        </Tab.Navigator>
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
