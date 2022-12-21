import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <View style={styles.container}>
      <NavBar/>
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
  fontColor: { color: "#d0d0d0" }
});
