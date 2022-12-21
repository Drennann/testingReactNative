import { Tab } from "@rneui/base";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ButtonGroup } from "@rneui/base";

const buttons = ['Friends', 'Transactions', 'Profile'];

export default function NavBar({navigation, route}: any) {
  
  const {tabName} = route.params? route.params : 0;
  const [selectedIndex, setSelectedIndex] = useState( tabName? tabName : 0);

  useEffect(()=>{
    setSelectedIndex(tabName? tabName : 0)
  },[])
  
  return (
    <View>
      <ButtonGroup
      buttons={buttons}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        navigation.navigate(buttons[value], {tabName: value})
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  navBarFont: {
    fontSize: 10
  },
});
