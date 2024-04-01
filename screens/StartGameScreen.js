import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import MainButton from "../components/ui/MainButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import IntoText from "../components/ui/IntroText";

function StartGameScreen({ onPickNum }) {
  const [enteredNum, setEnteredNum] = useState("");

  const { width, height } = useWindowDimensions();

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

  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title>Guess my number</Title>
          <Card>
            <IntoText>Enter a number</IntoText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
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
