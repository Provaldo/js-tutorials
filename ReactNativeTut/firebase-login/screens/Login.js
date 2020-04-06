// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'


export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
  };

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
    console.log('handleLogin')
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginInfoContainer}>
          <Text>Login</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder=" Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder=" Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <View style={styles.button}>
          <Button 
          style={styles.button}
          title="Login" onPress={this.handleLogin} />
          </View>

          <View style={styles.button}>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
          </View>

          
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 8
  },
  button:
  {
    width:'50%',
   //s marginHorizontal:10,
    marginTop:4
  },
  loginInfoContainer: {
    position: 'absolute',
    top: 10,
    width:'98%',
    //left: 0,
    //right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
})