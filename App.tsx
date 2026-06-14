import { NavigationContainer } from "@react-navigation/native";
//import { StyleSheet } from "react-native";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//   },
// });