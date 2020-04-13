import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import Main from "../screens/Main";
import Profile from "../screens/Profile";
import ListUsers from "../screens/ListUsers"

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Profile";

export default function BottomTabNavigatorSignedIn({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-contact" />
          ),
        }}
      />
      <BottomTab.Screen
        name="ListUsers"
        component={ListUsers}
        options={{
          title: "List Of User",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-people" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Main"
        component={Main}
        options={{
          title: "Log Out",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-log-out" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
        return "How to get started";
    case "Profile":
        return "Profile";
    case "Load":
        return "Load Screen";
    case "Main":
        return "Log Out";
    case "ListUsers":
        return "List of Users";
  }
}
