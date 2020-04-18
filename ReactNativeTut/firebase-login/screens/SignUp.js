// SignUp.js
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import firebase from "../constants/ApiKeys";
import styles from "../components/CustomStyle";
import { listScreens } from "../constants/ScreenNames";

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    phoneNumber: "",
    errorMessage: null,
  };
  handleSignUp = () => {
    this.setState({ errorMessage: null });
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate(listScreens.signIn.name))
      .catch((error) => this.setState({ errorMessage: error.message }));
    console.log("handleSignUp");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>YuppiAPP</Text>
        <Text style={styles.forgot}>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder=" Email..."
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder=" Password..."
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={{ color: "#fff" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


// const foreachView = (item) =>
//     Object.keys(item)
//       .filter((key) => key != "errorMessage" && key!="key")
//       .map((key) => {
//         return (
//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.textInput}
//               autoCapitalize="none"
//               placeholder={capitalize(key)+ "..."}
//               onChangeText={(key) => this.setState({ key })}
//               value={this.state[key]}
//             />
//           </View>
//         );
//       });