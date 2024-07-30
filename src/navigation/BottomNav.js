import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/content/Home";
import ServiceRequest from "../pages/content/ServiceRequest";
import Account from "../pages/content/Account";

import CustomIcon from "../components/Basic/CustomIcon";
import { appColorPalette } from "../utilities/constants";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: appColorPalette.primaryBLACK },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              name="home"
              color={focused ? appColorPalette.primaryRED : color}
              size={26}
            />
          ),
          tabBarActiveTintColor: "white",
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              name="wpforms"
              color={focused ? appColorPalette.primaryRED : color}
              size={26}
            />
          ),
          tabBarActiveTintColor: "white",
        }}
        name="Request Service"
        component={ServiceRequest}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              name="user"
              color={focused ? appColorPalette.primaryRED : color}
              size={26}
            />
          ),
          tabBarActiveTintColor: "white",
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
