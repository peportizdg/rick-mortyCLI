
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemRow: {
    marginBottom: '1%',
    borderWidth: 5,
    borderColor: '#7FFF00',
    backgroundColor: 'black',
    alignContent: 'center',
    alignSelf: 'center',
  },
  itemImage: {
    width: 340,
    height: 340,
    resizeMode: 'cover',
    alignSelf: 'center',
    margin: '0%'
  },
  itemText: {
    fontSize: 16,
    padding: 5,
    color: '#7FFF00',
    alignSelf: 'center',
    marginLeft: '5%'
  },
  favoriteImage: {
    width: 25,
    height: 25,
  },

  favoriteButton: { 
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: '7%' ,
  }
  });
  

  export default styles;