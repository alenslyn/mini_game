import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNum }) {
  const [enteredNum, setEnteredNum] = useState("");

  function numInputHandler(enteredText) {
    setEnteredNum(enteredText);
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  function confirmInputHandler() {
    const chosenNum = parseInt(enteredNum);

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNum(chosenNum);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={numInputHandler}
        value={enteredNum}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <MainButton onPress={resetInputHandler}>Reset</MainButton>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 6,
    shadowOpacity: 0.04,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
