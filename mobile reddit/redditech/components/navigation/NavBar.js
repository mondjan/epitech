import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNav from "./StackNav";
import UserScreen from "../../src/Screens/User/User";
import HomeScreen from "../../src/Screens/Home/Home";
import CreateSubScreen from "../../src/Screens/CreateSub/CreateSub";
import PrivateChatScreen from "../../src/Screens/PrivateChat/PrivateChat";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CreateSub") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "PrivateChat") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="CreateSub" component={CreateSubScreen} />
      <Tab.Screen name="PrivateChat" component={PrivateChatScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}

export default NavBar;
