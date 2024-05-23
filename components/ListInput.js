import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const ListInput = (props) => {
  const [enterInputText, setEnterInputText] = useState("");

  const inputHandler = (enterText) => {
    setEnterInputText(enterText);
  };

  const addListHandler = () => {
    props.addList(enterInputText);
    setEnterInputText("");
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Twoja notatka"
          value={enterInputText}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Dodaj"
              onPress={addListHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Usuń"
              onPress={props.onCancel}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#ccc",
    color: "#222",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});

export default ListInput;
