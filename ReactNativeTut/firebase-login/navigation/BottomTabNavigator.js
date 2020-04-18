import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import { switcherTitle,listScreens } from "../constants/ScreenNames";

const tab=listScreens.root
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = tab.home;

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name={tab.login}
        component={Login}
        options={{
          title: "Login",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-person" />
          ),
        }}
      />
      <BottomTab.Screen
        name={tab.home}
        component={HomeScreen}
        options={{
          title: "Get Started",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name={tab.signUp}
        component={SignUp}
        options={{
          title: "SignUp",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-person-add" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  switcherTitle(routeName);
}
