// Login.js
import React from 'react'
import { Text, TextInput, View, Button ,TouchableOpacity} from 'react-native'
import styles from '../components/CustomStyle'
import firebase from '../constants/ApiKeys'
import {listScreens} from '../constants/ScreenNames'

const root=listScreens.root;
const signedIn=listScreens.signIn;
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ?  signedIn.name: root.login)
    })
  };

  handleLogin = () => {
    const { email, password } = this.state
    this.setState({ errorMessage: null })
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate(signedIn.name))
      .catch(error => this.setState({ errorMessage: error.message }))

    console.log('handleLogin--')

  };
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.loginInfoContainer}> */}
        <Text style={styles.logo}>YuppiAPP</Text>
          <Text style={styles.forgot}>Login</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <View style={styles.inputView} >
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder=" Email..."
              onChangeText={email => this.setState({ email })}
              value={this.state.email}/>
          </View>
          
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder=" Password..."
              onChangeText={password => this.setState({ password })}
              value={this.state.password}/>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button}
          onPress={this.handleLogin} >
          <Text style={{color:"#fff"}}>Login</Text>
          </TouchableOpacity>
            
          <TouchableOpacity //style={styles.button}
          >
          <Text style={{color:"#fff"}}
          onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Text>
          </TouchableOpacity>

          
        </View>
      // </View>
    )
  }
}