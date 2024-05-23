import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressed) => pressed && styles.pressedList}
      >
        <Text style={styles.listText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  pressedList: {
    opacity: 0.5,
  },
  listText: {
    color: "white",
  },
});

export default ListItem;
