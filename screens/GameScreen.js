import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import NumContainer from "../components/game/NumContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, mqx, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNum }) {
  const initialGuess = generateRandomBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumContainer>{currentGuess}</NumContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
  },
});
