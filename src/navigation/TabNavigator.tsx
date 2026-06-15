import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MoviesScreen from "../screens/MoviesScreen";
import WatchedScreen from "../screens/WatchedScreen";
import React from "react";

const Tab = createBottomTabNavigator();

type TabNavigatorProps = {
  watchedMovies: string[];
  setWatchedMovies: React.Dispatch<React.SetStateAction<string[]>>;
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TabNavigator({ watchedMovies, setWatchedMovies, movies, setMovies}: TabNavigatorProps) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {() => (
          <HomeScreen watchedMovies={watchedMovies}/>
        )}
      </Tab.Screen> 

      <Tab.Screen name="Movies">
        {() => (
          <MoviesScreen
            watchedMovies={watchedMovies}
            setWatchedMovies={setWatchedMovies}
            movies={movies}
            setMovies={setMovies}
          />
        )}
      </Tab.Screen> 

      <Tab.Screen name="Watched">
        {() => (
          <WatchedScreen 
            watchedMovies={watchedMovies}
            setWatchedMovies={setWatchedMovies}
          />
        )}
      </Tab.Screen> 
    </Tab.Navigator>
  )
}