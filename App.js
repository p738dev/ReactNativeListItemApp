import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

const App = () => {
  const [lists, setLists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startAddItemList = () => {
    setIsModalOpen(true);
  };

  const endAddItemList = () => {
    setIsModalOpen(false);
  };

  const addListHandler = (enterInputText) => {
    setLists([
      ...lists,
      { text: enterInputText, id: Math.random().toString() },
    ]);
    endAddItemList();
  };

  const deleteListHandler = (id) => {
    setLists(lists.filter((item) => item.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Dodaj nową notatkę"
          color="#5e0acc"
          onPress={startAddItemList}
        />
        <ListInput
          addList={addListHandler}
          onCancel={endAddItemList}
          visible={isModalOpen}
        />
        <View style={styles.listsContainer}>
          <FlatList
            data={lists}
            renderItem={(itemData) => {
              return (
                <ListItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteListHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    backgroundColor: "#05BDBA",
  },

  listsContainer: {
    flex: 5,
  },
});

export default App;
