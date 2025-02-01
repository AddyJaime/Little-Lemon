import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// components
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./components/LoginScreen";
import MenuItems from "./components/MenuItem";
import LittleLemonFooter from "./components/LittleLemonFooter";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MenuItems} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
