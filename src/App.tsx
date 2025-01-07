import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
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
