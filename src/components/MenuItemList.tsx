import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const menuItemsToDisplay = [
  { title: "Appetizers", data: [{ name: "Hummus" }, { name: "Falafel" }] },
  {
    title: "Main Dishes",
    data: [{ name: "Lentil Burger" }, { name: "Kofta" }],
  },
  { title: "Desserts", data: [{ name: "Baklava" }, { name: "Tiramisu" }] },
];

const MenuItemList: React.FC = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default MenuItemList;
