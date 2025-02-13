import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet, TouchableOpacity } from "react-native";

// components
import LittleLemonHeader from "../components/LittleLemonHeader";
import LoginScreen from "../Screens/LoginScreen";

import LittleLemonFooter from "../components/LittleLemonFooter";
import HomeScreen from "../Screens/HomeScreen";
import MenuScreen from "../Screens/MenuScreen";

// other comp
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "../Screens/WelcomeScreen";

const Drawer = createDrawerNavigator();

const RootNavigator: React.FC = () => {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />

      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          drawerPosition: "left",
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#495E57",
          },
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={40} color={"white"} />
            </TouchableOpacity>
          ),
        })}
        initialRouteName="Login"
      >
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>

      {/* <LittleLemonFooter /> */}
    </View>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
