import React, { useState } from "react";
import firebase from "../constants/ApiKeys";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  YellowBox,
} from "react-native";
import _ from "lodash";
import Loading from "./Load";
import Modal from "react-native-modal";
import g_styles from "../components/CustomStyle";
import { capitalize, randomKey } from "../tools/Tools";

//========= Warning Suppression =============
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
//============================================
const TextIt = ({ item }) =>
  Object.keys(item)
    .filter((key) => key != "photo" && key != "key")
    .map((key) => {
      return (
        <Text style={g_styles.item} key={randomKey()}>
          {capitalize(key)}:{item[key]}
        </Text>
      );
    });
function Item({ item }) {
  const [ModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!ModalVisible);
  };
  return (
    <TouchableOpacity style={styles.listItem} onPress={toggleModal}>
      <Modal
        isVisible={ModalVisible}
        animationIn={"slideInLeft"}
        animationOut={"slideOutRight"}
      >
        <View style={g_styles.modalContent}>
          <TextIt item={item} />
          {/* <Text style={g_styles.item}>Name:{item.name}</Text>
          <Text style={g_styles.item}>Position:{item.position}</Text>
          <Text style={g_styles.item}>Email:{item.email}</Text> */}
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.button}>
              <Text>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "green" }}>Call</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default class ListUsers extends React.Component {
  state = {
    isLoading: true,
    data: [
      {
        name: "Miyah Myles",
        email: "miyah.myles@gmail.com",
        position: "Data Entry Clerk",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      },
      {
        name: "June Cha",
        email: "june.cha@gmail.com",
        position: "Sales Manager",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Iida Niskanen",
        email: "iida.niskanen@gmail.com",
        position: "Sales Manager",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Renee Sims",
        email: "renee.sims@gmail.com",
        position: "Medical Assistant",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        name: "Jonathan Nu\u00f1ez",
        email: "jonathan.nu\u00f1ez@gmail.com",
        position: "Clerical",
        photo: "https://randomuser.me/api/portraits/men/43.jpg",
      },
      {
        name: "Sasha Ho",
        email: "sasha.ho@gmail.com",
        position: "Administrative Assistant",
        photo:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      },
      {
        name: "Abdullah Hadley",
        email: "abdullah.hadley@gmail.com",
        position: "Marketing",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
      },
      {
        name: "Thomas Stock",
        email: "thomas.stock@gmail.com",
        position: "Product Designer",
        photo:
          "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
      },
      {
        name: "Veeti Seppanen",
        email: "veeti.seppanen@gmail.com",
        position: "Product Designer",
        photo: "https://randomuser.me/api/portraits/men/97.jpg",
      },
      {
        name: "Bonnie Riley",
        email: "bonnie.riley@gmail.com",
        position: "Marketing",
        photo: "https://randomuser.me/api/portraits/women/26.jpg",
      },
    ],
  };

  constructor(props) {
    super();
    this.firestoreRef = firebase.firestore().collection("Users");
    this.user = null;
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection
      ,(error)=>console.log("Error:"+error));
    //.catch(console.log("Constr ERROR"));
  }

  componentWillUnmount() {
    this.unsubscribe();
    console.log("jinjnjiernjiefnjier")
  }

  getCollection = (querySnapshot) => {
    querySnapshot.forEach((res) => {
      const { name, email, photo, position } = res.data();
      this.user = {
        key: res.id,
        name,
        email,
        photo,
        position,
      };
      //console.log(this.user);
      this.setState({
        data: [this.user, ...this.state.data],
      });
    });
    this.setState({ isLoading: false });
  };

  render() {
    
    if (this.state.isLoading) {
      return <Loading />;
    }
    console.log(this.props.navigation.isFocused());
    
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 0,
  },
  listItem: {
    margin: 5,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});
