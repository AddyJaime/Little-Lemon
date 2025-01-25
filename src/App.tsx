import React from "react";
import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
// import WelcomeScreen from "./components/WelcomeScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LoginScreen from "./components/LoginScreen";
import MenuItem from "./components/MenuItem";
import MenuItems from "./components/MenuItem";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        <MenuItems />
      </View>

      <View>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
