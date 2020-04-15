// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View,TouchableOpacity } from 'react-native'
import firebase from '../constants/ApiKeys'
import Customstyles from '../components/CustomStyle'


export default class Main extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}

handleSignOut = () => {
  firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.goBack()
      /*this.props.navigation.navigate('Root')*/);
  const cu = null;
  this.setState({cu});

  console.log('handleSignOut')
}
render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!!!
        </Text>
        <TouchableOpacity
          style={Customstyles.buttonOut}
          onPress={this.handleSignOut} >
          <Text style={{color:"#fff"}}>SignOut</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})