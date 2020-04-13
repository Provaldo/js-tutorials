// Loading.js
import React from "react";
import { View, Text, Image} from "react-native";
import styles from "../components/CustomStyle";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.containerP}>
        <Image
          source={require('../assets/images/profile.jpg')}
          style={styles.profileImg}
          //resizeMode="contain"
        />
        <Text style={{ padding: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet dictum sapien, nec viverra orci. Morbi sed maximus purus.
          Phasellus quis justo mi. Nunc ut tellus lectus.
        </Text>
        <Text style={{ padding: 20 }}>
          In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor
          tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada
          elit.
        </Text>
      </View>
    );
  }
}
