import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <View style={styles.content}>
        <WelcomeScreen />
      </View>
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  content: {
    flex: 1,
  },
});
