import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import AddCourse from "./Components/AddCourse";
import ShowCourse from "./Components/ShowCourse";

export default function App() {
  const [courseList, setCourseList] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);

  function getCourseHandler(enterdCourseName) {
    setCourseList((existingCourseList) => [
      ...existingCourseList,
      { text: enterdCourseName, key: courseList.length + 1 },
    ]);
    endModalVisibility();
  }

  function deleteHandler(key) {
    setCourseList((exitingCourse) => {
      return exitingCourse.filter((course) => course.key !== key);
    });
  }

  function startModalVisibility() {
    setModalVisibility(true);
  }
  function endModalVisibility() {
    setModalVisibility(false);
    ("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button
          title="Add new course"
          color={"#15bfeb"}
          onPress={startModalVisibility}
        />
      </View>

      <AddCourse
        visibility={isModalVisible}
        hideModal={endModalVisibility}
        getCourseHandler={getCourseHandler}
      />

      <View style={styles.showCourseArea}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseList}
          renderItem={(itemData) => {
            return (
              // item is a property of Flatlist component
              <ShowCourse
                text={itemData.item.text}
                id={itemData.item.key}
                deleteHandler={deleteHandler}
              />
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    paddingHorizontal: 18,
    backgroundColor: "#3291a8",
    // alignItems: "center",
    // justifyContent: "center",
  },
  addButton: {
    width: "60%",
    marginTop: 65,
    marginLeft: "20%",
    marginBottom: 15,
    backgroundColor: "#27768a",
    borderRadius: 5,
  },
  showCourseArea: {
    flex: 8,
  },
});
