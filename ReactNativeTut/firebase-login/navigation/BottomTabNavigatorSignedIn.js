import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import Main from "../screens/Main";
import Profile from "../screens/Profile";
import ListUsers from "../screens/ListUsers"
import {switcherTitle,listScreens} from "../constants/ScreenNames"

const tab=listScreens.signIn;
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = tab.profile;

export default function BottomTabNavigatorSignedIn({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
          name={tab.profile}
          component={Profile}
          options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-contact" />
          ),
        }}
      />
      <BottomTab.Screen
        name={tab.list}
        component={ListUsers}
        options={{
          title: "List Of User",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-people" />
          ),
        }}
      />

      <BottomTab.Screen
        name={tab.main}
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

export function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  switcherTitle(routeName);
}
