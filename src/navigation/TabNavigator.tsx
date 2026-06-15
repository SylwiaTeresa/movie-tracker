import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MoviesScreen from "../screens/MoviesScreen";
import WatchedScreen from "../screens/WatchedScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: "home" | "film" | "star";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Movies") {
            iconName = "film";
          } else {
            iconName = "star";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          )
        }
      })}
    >
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