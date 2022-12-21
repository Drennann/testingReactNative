import { Tab } from "@rneui/base";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function NavBar() {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          height: 1,
        }}
      >
        <Tab.Item
          titleStyle={styles.navBarFont}
          containerStyle={(active) => ({
            backgroundColor: active ? "#23212c" : "#13111c",
          })}
        >
          Friends
        </Tab.Item>
        <Tab.Item
          titleStyle={styles.navBarFont}
          containerStyle={(active) => ({
            backgroundColor: active ? "#23212c" : "#13111c",
          })}
        >
          Transactions
        </Tab.Item>
        <Tab.Item
          titleStyle={styles.navBarFont}
          containerStyle={(active) => ({
            backgroundColor: active ? "#23212c" : "#13111c",
          })}
        >
          Profile
        </Tab.Item>
      </Tab>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarFont: {
    fontSize: 10,
  },
});
