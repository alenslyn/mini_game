import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import MainButton from "../components/ui/MainButton";

function GameOverScreen({ roundsNum, userNum, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.screen}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: { flex: 1 },

  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
