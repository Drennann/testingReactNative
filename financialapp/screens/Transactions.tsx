import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

export default function Transactions({navigation, route }: any) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.fontColor}>
          Transactions
        </Text>
      </View>
      <NavBar navigation={navigation } route={route}></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    height:"100%",
    backgroundColor: "#13111c",
    display:"flex",
    justifyContent:"space-between"
  },
  container: {
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13111c",
    flexGrow:1
  },
  fontColor: { color: "#d0d0d0"},
});
