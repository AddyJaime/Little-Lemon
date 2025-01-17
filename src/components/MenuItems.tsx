import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// the interface is MenuItem and the properties inside of this objects are these two.
interface MenuItem {
  id: string;
  name: string;
  price: string;
}

const menuItemsToDisplay = [
  { name: "Hummus", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
];

const MenuItems: React.FC = () => {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <Item name={item.name} price={item.price} />
  );
  return (
    <View style={styles.content}>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
      ></FlatList>
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
    paddingTop: 25,
  },
});

export default MenuItems;
