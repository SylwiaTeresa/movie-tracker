import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MoviesScreen from "../screens/MoviesScreen";
import WatchedScreen from "../screens/WatchedScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen 
        name="Movies"
        component={MoviesScreen}
      />

      <Tab.Screen 
        name="Watched"
        component={WatchedScreen}
      />
    </Tab.Navigator>
  )
}