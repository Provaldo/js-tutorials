import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View,TouchableOpacity,Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Main from '../screens/Main'
import styles from '../components/CustomStyle'
import { Ionicons } from '@expo/vector-icons';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

class Header extends React.Component {
    render(){

     return(
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>this.props.nav()}>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      {/* <Text>{this.props.name()}</Text> */}
      <Text style={{width:50}}></Text>
    </View>
  )};
     }
const Drawer = createDrawerNavigator();

export default function BottomTabNavigatorSignedIn({ navigation, route }) {
    navigation.setOptions({ headerTitle: getHeaderTitle(route),headerRight:(navigation)=>
    (<Header name={()=>"H3H"} nav={()=>navigation.openDrawer()}/>) });
    return (
    <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          navigationOptions={{
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
    </Drawer.Navigator>
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