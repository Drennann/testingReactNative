import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ButtonGroup } from "@rneui/base";
import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackParamList = {
  Friends: { tabName: number } | undefined;
  Transactions: { tabName: number } | undefined;
  Profile: { tabName: number } | undefined;
};

const buttons = ["Friends", "Transactions", "Profile"];

type Props = {
  route:
    | RouteProp<StackParamList, "Transactions">
    | RouteProp<StackParamList, "Profile">
    | RouteProp<StackParamList, "Friends">
    | undefined;
  navigation:
    | NativeStackNavigationProp<StackParamList, "Profile", undefined>
    | NativeStackNavigationProp<StackParamList, "Transactions", undefined>
    | NativeStackNavigationProp<StackParamList, "Friends", undefined>;
};

export default function NavBar({ navigation, route }: Props) {
  const tabName = route?.name ? buttons.indexOf(route.name) : 0;
  const [selectedIndex, setSelectedIndex] = useState(tabName ? tabName : 0);

  useEffect(() => {
    setSelectedIndex(tabName ? tabName : 0);
  }, []);

  return (
    <View>
      <ButtonGroup
        buttons={buttons}
        selectedIndex={selectedIndex}
        onPress={(value: number) => {
          navigation.navigate(buttons[value]);
        }}
        containerStyle={styles.containerStyle}
        textStyle={styles.navBarFont}
        selectedButtonStyle={styles.selectedButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navBarFont: {
    fontSize: 12,
    color: "#d0d0d0",
  },
  selectedButton: {
    backgroundColor: "#43414c",
    borderColor: "#414141",
  },
  containerStyle: {
    marginBottom: 20,
    backgroundColor: "#23212c",
    borderWidth: 0.5,
    borderColor: "#d0d0d0",
  },
});
