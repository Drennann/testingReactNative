import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Friends() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontColor}>Friends</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13111c",
  },
  fontColor: { color: "#d0d0d0" },
});
