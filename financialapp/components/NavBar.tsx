
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ButtonGroup } from "@rneui/base";

const buttons = ["Friends", "Transactions", "Profile"];


export default function NavBar({ navigation, route }:any) {
  const { tabName } = route.params ? route.params : 0;
  const [selectedIndex, setSelectedIndex] = useState(tabName? tabName : 0);

  useEffect(() => {
    setSelectedIndex(tabName? tabName : 0);
  }, []);

  return (
    <View>
      <ButtonGroup
        buttons={buttons}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          navigation.navigate(buttons[value], { tabName: value });
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
