import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    textInput: {
      height: 40,
      width: '90%',
      //borderColor: 'gray',
      //borderWidth: 2,
      //marginTop: 8
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    button:
    {
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10
    },
    buttonOut:
    {
      width:"30%",
      backgroundColor:"#003f5c",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10
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
    containerP: {
      backgroundColor: "#fff",
      paddingTop:40,
      alignItems:"center",
      flex:1
  
    },
    profileImg:{
      width:"80%",
      height:"30%",
      borderRadius:70,
      marginTop:5
    },
  })