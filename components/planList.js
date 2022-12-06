import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Text,
  Image,
} from "react-native";
import { useState } from "react";

// our input area
function PlanList(props) {
  const [textData, setText] = useState("");

  function TextValueHandler(text) {
    setText(text);
  }

  // to passing to textData to setTextList function in App  we must create another function in here
  function addTextDataHandler() {
    props.onAddList(textData);
    setText("");
  }

  return (
    <Modal
      style={styles.modalArea}
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputArea}>
        <View style={styles.headerArea}>
          <Text style={styles.headerText}>TYPE YOUR PLAN</Text>
          <Image style={styles.image} source={require("../assets/goal.png")} />
        </View>

        <TextInput
          style={styles.inputtext}
          onChangeText={TextValueHandler}
          placeholder="Enter your list"
          value={textData}
        />
        <View style={styles.btnArea}>
          <View style={styles.btnOne}>
            <Button title="Add" color="#46C2CB" onPress={addTextDataHandler} />
          </View>
          <View style={styles.btnTwo}>
            <Button title="Cancel" color="#FB2576" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default PlanList;

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#251749",
  },

  inputtext: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E5B8F4",
    padding: 5,
    color: "#332FD0",
    backgroundColor: "#E5B8F4",
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: "800",
  },
  headerText: {
    textAlign: "center",
    fontSize: 24,
    color: "#f80",
    padding: 5,
    fontWeight: "700",
  },
  btnArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnOne: {
    paddingHorizontal: 10,
    width: 100,
  },
  btnTwo: {
    paddingHorizontal: 10,
    width: 100,
  },
  headerArea: {
    textAlign: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
