import React from "react";
import { View, Text, FlatList, StyleSheet, SectionList } from "react-native";

// the interface is MenuItem and the properties inside of this objects are these two.
interface MenuItem {
  name: string;
  price: string;
  id?: string;
}

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const MenuItems: React.FC = () => {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <Item name={item.name} price={item.price} />
  );
  const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.itemTitle}>{section.title}</Text>
    </View>
  );
  return (
    <View style={styles.content}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
      ></SectionList>
    </View>
  );
};

const Item: React.FC<{ name: string; price: string }> = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}> {price}</Text>
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

const Header = () => <Text style={styles.headerText}> View Menu</Text>;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#333333",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  itemName: {
    fontSize: 25,
    color: "#F4CE14",
  },
  itemPrice: {
    fontSize: 25,
    color: "#F4CE14",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "white",
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 35,
  },
  sectionHeader: {
    backgroundColor: "#F4CE14",
  },
  itemTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default MenuItems;
