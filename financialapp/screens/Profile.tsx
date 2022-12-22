import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import data from "../data.json";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type StackParamList = {
  Friends: { tabName: number } | undefined;
  Transactions: { tabName: number } | undefined;
  Profile: { tabName: number } | undefined;
};

type Props = NativeStackScreenProps<StackParamList, "Profile">;

export default function Profile({ navigation, route }: Props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.userCard}>
          <Text style={styles.fontColor}>{data.user.name}</Text>
          <Text style={styles.fontColor}>{data.user.email}</Text>
        </View>
        {data.user.accounts.map((account, index) => (
          <View key={index} style={styles.balanceCard}>
            <Text style={styles.fontColor}>{account.type}:</Text>
            <Text style={styles.fontColor}>${account.balance}</Text>
          </View>
        ))}
      </View>
      <NavBar navigation={navigation} route={route}></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#13111c",
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13111c",
    flexGrow: 1,
  },
  fontColor: { color: "#d0d0d0", textAlign: "center" },
  balanceCard: {
    backgroundColor: "#23212c",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#313131",
    width: "80%",
    height: 150,
    margin: 10,
  },
  userCard: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#23212c",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#313131",
    width: "80%",
    minHeight: 70,
    margin: 10,
  },
});
