import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  const [watchedMovies, setWatchedMovies] = useState<string[]>([]);
  const [movies, setMovies] = useState([
    "Interstellar",
    "Dune",
    "Arrival",
    "Masters of the Universe",
  ]);

  return (
    <NavigationContainer>
      <TabNavigator 
        watchedMovies={watchedMovies}
        setWatchedMovies={setWatchedMovies} 
        movies={movies}
        setMovies={setMovies}

      />
    </NavigationContainer>
  )
}