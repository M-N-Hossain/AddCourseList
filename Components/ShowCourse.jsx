import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

export default function ShowCourse(props) {
  function provideIdToDeleteCourse() {
    props.deleteHandler(props.id);
  }
  return (
    <Pressable
      onPress={provideIdToDeleteCourse}
      // pressed is a property of Pressable component
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.course}>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  course: {
    backgroundColor: "#28babf",
    marginTop: 2,
    height: 40,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
