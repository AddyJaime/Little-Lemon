import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// components
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./components/LoginScreen";
import MenuItems from "./components/MenuItems";
import LittleLemonFooter from "./components/LittleLemonFooter";
import HomeScreen from "./components/HomeScreen";

// other comp
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ drawerPosition: "left" }}
          initialRouteName="Login"
        >
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Menu"
            component={MenuItems}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Drawer.Screen>
        </Drawer.Navigator>
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
