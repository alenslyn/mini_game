import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import MainButton from "../components/ui/MainButton";

function GameOverScreen({ roundsNum, userNum, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.sumText}>
        Your phone needed <Text style={styles.highlight}>{roundsNum}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNum}</Text>.
      </Text>
      <MainButton onPress={onStartNewGame}>Start new game</MainButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
