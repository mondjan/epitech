import Ionicons from "react-native-vector-icons/Ionicons";
import SinglePost from "../../src/Screens/SinglePost/SinglePost";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../src/Screens/Home/Home";
import SubReddit from "../../src/Screens/SubReddit/SubReddit";

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="SinglePost" component={SinglePost} />
      <Stack.Screen name="SubReddit" component={SubReddit} />
    </Stack.Navigator>
  );
}

export default StackNav;
