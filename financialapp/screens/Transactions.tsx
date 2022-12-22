import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import data from "../data.json";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type StackParamList = {
  Friends: undefined;
  Transactions: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<StackParamList, "Transactions">;

export default function Transactions({ navigation, route }: Props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {data.transactions.map((transaction, index) => {
          return (
            <View key={index} style={styles.transactionCard}>
              <Text style={styles.fontColor}>{transaction.type}:</Text>
              <Text style={styles.fontColor}>${transaction.amount}</Text>
              {transaction.account && (
                <Text style={styles.fontColor}>
                  Account: {transaction.account}
                </Text>
              )}
              {transaction.fromAccount && (
                <Text style={styles.fontColor}>
                  From: {transaction.fromAccount}
                </Text>
              )}
              {transaction.toAccount && (
                <Text style={styles.fontColor}>
                  To: {transaction.toAccount}
                </Text>
              )}
            </View>
          );
        })}
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
  transactionCard: {
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
});
