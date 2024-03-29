import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function IntoText({ children, style }) {
  return <Text style={[styles.intoText, style]}>{children}</Text>;
}

export default IntoText;

const styles = StyleSheet.create({
  intoText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
