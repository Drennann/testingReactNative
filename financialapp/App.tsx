import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/base";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.button}
        title="Hello World!"
        titleStyle={styles.fontColor}
      />
      <StatusBar style="light" />
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
  button: {
    backgroundColor: "#212121",
    borderWidth: 1,
    borderColor: "#414141",
  },
  fontColor: { color: "#d0d0d0" },
});
