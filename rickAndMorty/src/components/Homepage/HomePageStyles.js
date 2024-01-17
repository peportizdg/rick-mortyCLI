import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignContent: 'center',
    },
    logo: {
      height: '18%',
      width:'100%',
    },
    backgroundImage:{
      height:'100%',
      width:'100%',
      justifyContent: 'center'
    },
    screen:{
      alignSelf: 'center',
      flex: 1,
    },
    loader: {
      marginTop: 10,
      alignItems: 'center'
    },
    textInputStyle: {
      borderWidth: 1,
      alignSelf: 'center',
      marginBottom: 10,
      flex: 1.2,
      borderColor: '#97ce4c',
      borderRadius: 4,
      borderWidth: 2,
      backgroundColor: 'black',
      textDecorationColor: '#97ce4c',
      color: '#97ce4c',
      alignContent: 'center',
      maxWidth: '80%',
      maxHeight: '10%',
      width: 400,
      textAlign: 'center',
    },
    
  
  });

  export default styles;