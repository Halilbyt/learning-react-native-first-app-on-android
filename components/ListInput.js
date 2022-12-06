import { StyleSheet, Text, View, Pressable } from "react-native";

function ListInput(props) {
  function myTextProp() {
    props.onDeleteItem(props.id);
  }
  // alternative usage for creation extra functio to send id
  // we can use bind method to send id data
  // onPress = {props.onDeleteItem.bind()} =>
  return (
    <View style={styles.listTextArea}>
      <Pressable android_ripple={{ color: "#f21" }} onPress={myTextProp}>
        <Text style={styles.textArea}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default ListInput;

const styles = StyleSheet.create({
  listTextArea: {
    backgroundColor: "#52a",
    borderRadius: 7,
    marginTop: 5,
  },
  textArea: {
    padding: 10,
    color: "#fff",
    fontSize: 16,
  },
});
