import { Tab } from "@rneui/base";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function NavBar(){

  const [index, setIndex] = useState(0);

    return(
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
            backgroundColor: active ? "#23212c" : undefined,
          })}
        >
          Friends
        </Tab.Item>
        <Tab.Item
          titleStyle={styles.navBarFont}
          containerStyle={(active) => ({
            backgroundColor: active ? "#23212c" : undefined,
          })}
        >
          Transactions
        </Tab.Item>
        <Tab.Item
          titleStyle={styles.navBarFont}
          containerStyle={(active) => ({
            backgroundColor: active ? "#23212c" : undefined,
          })}
        >
          Profile
        </Tab.Item>
      </Tab>
    )
}

const styles = StyleSheet.create({
    navBarFont: {
      fontSize: 10,
    },
  });
  