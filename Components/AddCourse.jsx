import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function AddCourse(props) {
  const [enterdCourseName, setEnterdCourseName] = useState("");

  function getTextFromTextInput(enterdText) {
    setEnterdCourseName(enterdText);
  }
  function addCourseBtnFn() {
    props.getCourseHandler(enterdCourseName);
    setEnterdCourseName("");
  }
  function cancelBtnFn(){
    setEnterdCourseName("");
    props.hideModal()
  }

  return (
    <Modal visible={props.visibility} animationType="slide">
      <View style={styles.addCourseArea}>
        <TextInput
          style={styles.textInput}
          onChangeText={getTextFromTextInput}
          placeholder="Add course name here"
          placeholderTextColor="white"
          value={enterdCourseName}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color={"white"} title="Add Course" onPress={addCourseBtnFn} />
          </View>
          <View style={styles.button}>
            <Button color={"red"} title="Cancel" onPress={cancelBtnFn} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  addCourseArea: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#22b54c",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "white",
    marginTop: "65%",
    marginRight: 5,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    // borderWidth: 1,
    // borderColor: "white",
    margin: 8,
    padding: 1,
  },
});
