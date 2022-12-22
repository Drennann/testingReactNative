import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./screens/Profile";
import Transactions from "./screens/Transactions";
import Friends from "./screens/Friends";

type StackParamList = {
  Friends: { tabName: number } | undefined;
  Transactions: { tabName: number } | undefined;
  Profile: { tabName: number } | undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Friends" component={Friends}></Stack.Screen>
        <Stack.Screen
          name="Transactions"
          component={Transactions}
        ></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
