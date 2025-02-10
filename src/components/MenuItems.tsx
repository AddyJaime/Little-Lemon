import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../types";

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const menuItemsToDisplay = [
  { title: "Appetizers", data: [{ name: "Hummus" }, { name: "Falafel" }] },
  {
    title: "Main Dishes",
    data: [{ name: "Lentil Burger" }, { name: "Kofta" }],
  },
  { title: "Desserts", data: [{ name: "Baklava" }, { name: "Tiramisu" }] },
];

const MenuItems: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation();

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
            Little Lemon Restaurant was founded in Chicago in 2020 by two
            brothers, Mario and Adrian, who share a passion for Mediterranean
            cuisine. Their dream was to create a cozy neighborhood bistro where
            guests could enjoy authentic, simple dishes made with fresh,
            high-quality ingredients. With a menu inspired by Greek, Turkish,
            and Italian flavors, Little Lemon quickly became a local favorite
            for its homemade hummus, lentil burgers, and refreshing
            citrus-infused cocktails.
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
        <SectionList
          keyExtractor={(item, index) => item.name + index}
          sections={menuItemsToDisplay}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
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
  title: { fontSize: 20, color: "white", marginRight: 20 },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    marginVertical: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 18, color: "black" },
  sectionHeader: {
    fontSize: 22,
    backgroundColor: "#fbdabb",
    padding: 5,
    textAlign: "center",
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "rgba(0, 4, 3, 0.24)",
    marginVertical: 5,
  },
  itemText: { fontSize: 18, color: "black" },
  buttonPressed: {
    opacity: 0.5,
    transform: [{ scale: 0.95 }],
  },
});

export default MenuItems;
