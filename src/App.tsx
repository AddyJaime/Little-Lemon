import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// components
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./components/LoginScreen";
import MenuItems from "./components/MenuItems";
import LittleLemonFooter from "./components/LittleLemonFooter";
import HomeScreen from "./components/HomeScreen";

// other comp
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const navigation = useNavigation();

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: "left",
            headerShown: true,
            headerTitle: "",
            // headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#495E57",
            },
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Ionicons name="menu" size={40} color={"white"} />
                </TouchableOpacity>
              );
            },
          }}
          initialRouteName="Login"
        >
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="Menu"
            component={MenuItems}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: true }}
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
