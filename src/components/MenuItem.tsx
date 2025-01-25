import React, { useState } from "react";
import { View, Text, StyleSheet, SectionList, Pressable } from "react-native";

interface MenuItem {
  name: string;
}

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus" },
      { name: "Moutabal" },
      { name: "Falafel" },
      { name: "Marinated Olives" },
      { name: "Kofta" },
      { name: "Eggplant Salad" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger" },
      { name: "Smoked Salmon" },
      { name: "Kofta Burger" },
      { name: "Turkish Kebab" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries" },
      { name: "Buttered Rice" },
      { name: "Bread Sticks" },
      { name: "Pita Pocket" },
      { name: "Lentil Soup" },
      { name: "Greek Salad" },
      { name: "Rice Pilaf" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava" },
      { name: "Tartufo" },
      { name: "Tiramisu" },
      { name: "Panna Cotta" },
    ],
  },
];

const Separator = () => <View style={menuStyles.separator} />;

const Item: React.FC<{ name: string }> = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const MenuItems: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderItem = ({ item }: { item: MenuItem }) => (
    <Item name={item.name} />
  );

  const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <Text style={menuStyles.sectionHeader}>{section.title} </Text>
  );

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => setShowMenu((prevState) => !prevState)}
      >
        <Text style={menuStyles.buttonText}>
          {showMenu ? "Home" : "View Menu"}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item.name + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          // ItemSeparatorComponent={Separator}
        ></SectionList>
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});

export default MenuItems;
