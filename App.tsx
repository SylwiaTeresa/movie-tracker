import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import { MovieProvider } from "./src/context/MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </MovieProvider>
  )
}