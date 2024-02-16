
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemRow: {
    marginBottom: '1%',
    borderWidth: 6,
    borderRadius: 15,
    borderColor: '#97ce4c',
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
    color: '#97ce4c',
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
      marginRight: '3%' ,
  },
  commentButton: {
    justifyContent: 'center',
    marginRight: '3%' ,
  },
  favoriteStyle: {

  },
  nonFavoriteStyle: {
    },
  });
  

  export default styles;