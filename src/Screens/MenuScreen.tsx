import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import MenuItemList from "../components/MenuItemList";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MenuScreen: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.goBackButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.goBackText}>← Back to home</Text>
      </Pressable>

      {!showMenu ? (
        <>
          <View style={styles.headerContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/log.png")}
              accessibilityLabel="Little Lemon Logo"
            />
            <Text style={styles.title}>Little Lemon</Text>
          </View>
          <Text style={styles.description}>
            Little Lemon Restaurant fue fundado en Chicago en 2020...
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => setShowMenu(true)}
          >
            <Text style={styles.buttonText}>View Menu</Text>
          </Pressable>
        </>
      ) : (
        <MenuItemList />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "rgba(0, 4, 3, 0.03)" },
  goBackButton: { marginBottom: 10, alignSelf: "flex-start" },
  goBackText: { fontSize: 22, color: "black" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 50, height: 50, paddingRight: 30 },
  title: { fontSize: 20, color: "black", marginRight: 20 },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    marginVertical: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fbdabb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 18, color: "black" },
  buttonPressed: {
    opacity: 0.5,
    transform: [{ scale: 0.95 }],
  },
});

export default MenuScreen;
