import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View,TouchableOpacity,Text,Image,FlatList } from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Main from '../screens/Main'
import styles from '../components/CustomStyle'
import { Ionicons } from '@expo/vector-icons';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function Item({ item, navigate }) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
        <Ionicons name={item.icon} size={32} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

class Sidebar extends React.Component {
    state = {
        routes:[
            {
                name:"Home",
                icon:"ios-home"
            },
            {
                name:"Profile",
                icon:"ios-contact"
            },
            {
                name:"Settings",
                icon:"ios-settings"
            },
        ]
    }


    render(){
        return (
            <View style={styles.container2}>
                <Image source={require("../assets/profile.jpg")} style={styles.profileImg}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Janna Doe</Text>
                <Text style={{color:"gray",marginBottom:10}}>janna@doe.com</Text>
                <View style={styles.sidebarDivider}></View>
                <FlatList
                    style={{width:"100%",marginLeft:30}}
                    data={this.state.routes}
                    renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        )
    }
}
const Header =({name, openDrawer})=> (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>openDrawer()}>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      <Text>{name}</Text>
      <Text style={{width:50}}></Text>
    </View>
  )

const Home = ({navigation}) => (
    <View style={styles.container2}>
      <Header name="Home" openDrawer={navigation.openDrawer}/>
      <Image source ={require("../assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
      <Text style={{padding:20}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
      </Text>
      <Text style={{padding:20}}>
      In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
      </Text>
  
    </View>
  )

const Drawer = createDrawerNavigator(
    {
      Home:{ screen: Home},
      Main:{ screen: Main},
      Profile:{ screen: HomeScreen},  
    },
    {
      initialRouteName: "Home",
      unmountInactiveRoutes: true,
      headerMode: "none",
      contentComponent: props => <Sidebar {...props} />
    }
  )

const AppNavigator = createStackNavigator(
    {
        Drawer : {screen: Drawer},
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
        unmountInactiveRoutes: true
    }
)

const AppContainer = createAppContainer(AppNavigator);


export default function BottomTabNavigatorSignedIn({ navigation, route }) {
    return (
    <AppContainer/>
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