import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";

import React, { Component, useState } from "react";
import ListInput from "./components/ListInput";
import PlanList from "./components/planList";

export default function App() {
  // for the creating textlist state that getting in data from text input
  const [textList, setTextList] = useState([]);
  //for the moda visibility state
  const [modalIsVisiable, setModalIsVisiable] = useState(false);
  // make visible funciton
  function startPlanListAdd() {
    setModalIsVisiable(true);
  }
  //make unvisible function
  function EndPlanListAdd() {
    setModalIsVisiable(false);
  }
  // adding text to text list func.
  function TextListHandler(textData) {
    /* if your new state depends to previous state this not the best way :
    setTextList([...textList,textData]);
    */
    setTextList((currentValue) => [
      ...currentValue,
      { text: textData, id: Math.round(Math.random() * 22).toString() },
    ]);
    EndPlanListAdd(false);
  }
  // for delete items from list
  function deleteItemHandler(id) {
    setTextList((currentValue) => {
      return currentValue.filter((item) => item.id !== id);
    });
  }
  return (
    <View style={styles.container}>
      <Button
        title="Add the Plans"
        color="#5e0acc"
        onPress={startPlanListAdd}
      />

      <PlanList
        visible={modalIsVisiable}
        onAddList={TextListHandler}
        onCancel={EndPlanListAdd}
      />
      <View style={styles.listElementArea}>
        <FlatList
          style={styles.flatList}
          data={textList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <ListInput
                text={itemData.item.text}
                onDeleteItem={deleteItemHandler}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

// style properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B185F",
    marginTop: 30,
  },

  listElementArea: {
    flex: 3,
    marginLeft: 20,
    marginRight: 20,
    borderTopWidth: 1,
  },
  flatList: {
    marginTop: 10,
  },
});
