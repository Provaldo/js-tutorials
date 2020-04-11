import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import  SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Load from '../screens/Load'
import Main from '../screens/Main'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';


export default function BottomTabNavigatorSignedIn({ navigation, route }) {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    return (
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Get Started',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          }}
        />
        <BottomTab.Screen
          name="Main"
          component={Main}
          options={{
            
            title: 'Main',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
          }}
        />
      </BottomTab.Navigator>
    );
  }
  
  
  function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  
    switch (routeName) {
      case 'Home':
        return 'How to get started';
      case 'Load':
        return 'Load Screen';
      case 'Main':
        return 'Profile';
      case 'Links':
        return 'Links to learn more';
    }
  }