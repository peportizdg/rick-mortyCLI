import React from 'react';
import { Text, View, Image, Modal} from 'react-native';
import styles from './CharacterViewModalStyles';
import { useSelector,useDispatch } from 'react-redux';
import { setCharacterModalFav} from '../../store/Reducers';
  


  
  const CharacterViewModalFavorite =({
}) => {
    const {characterModalFav,characterModalItem, origin, location, comment}  = useSelector(state => state.application);
    const dispatch = useDispatch();
    return(
        <Modal transparent={true} visible={characterModalFav} animationType="slide">
          <View style={styles.modalContainer}>
          <View style={styles.modalCardChar}>
            <View style={styles.itemRowModal}>
              <Text style={styles.itemTextChar}>{characterModalItem.name}</Text>
              <Image style={styles.itemImage} source={{uri: characterModalItem.image}} />
              <Text style={styles.itemText}>Status: {characterModalItem.status}</Text>
              <Text style={styles.itemText}>Species: {characterModalItem.species}</Text>
              <Text style={styles.itemText}>Type: {characterModalItem.type}</Text>
              <Text style={styles.itemText}>Gender: {characterModalItem.gender}</Text>
              <Text style={styles.itemText}>Origin: {origin.name}</Text>
              <Text style={styles.itemText}>Location: {location.name}</Text>
              <Text style={styles.itemText}>Comment: {comment}</Text>
            </View>
            <Text style={styles.filterTitle} onPress={() => dispatch(setCharacterModalFav(false))}>Close</Text>
          </View>
          </View>
      </Modal>
    )
}

export default CharacterViewModalFavorite;