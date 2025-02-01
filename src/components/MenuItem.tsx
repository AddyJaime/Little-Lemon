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
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.goBackText}>← Back</Text>
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
            Little Lemon is a charming bistro with daily specials.
          </Text>
          <Pressable style={styles.button} onPress={() => setShowMenu(true)}>
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
  container: { flex: 1, padding: 20 },
  goBackButton: { marginBottom: 10, alignSelf: "flex-start" },
  goBackText: { fontSize: 18, color: "#EE9972" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 50, height: 50 },
  title: { fontSize: 20, color: "white", marginLeft: 10 },
  description: { fontSize: 16, textAlign: "center", color: "#EDEFEE" },
  button: {
    backgroundColor: "#EE9972",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 18, color: "white" },
  sectionHeader: {
    fontSize: 22,
    backgroundColor: "#fbdabb",
    padding: 5,
    textAlign: "center",
  },
  itemContainer: { padding: 10, backgroundColor: "#333", marginVertical: 5 },
  itemText: { fontSize: 18, color: "#F4CE14" },
});

export default MenuItems;
