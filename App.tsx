import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  const [watchedMovies, setWatchedMovies] = useState<string[]>([]);

  return (
    <NavigationContainer>
      <TabNavigator 
        watchedMovies={watchedMovies}
        setWatchedMovies={setWatchedMovies} 
      />
    </NavigationContainer>
  )
}