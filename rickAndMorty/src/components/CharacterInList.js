import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import styles from '../styles/CharacterInListStyles';
import { ref, onChildAdded, onChildRemoved } from "firebase/database";
import { db } from '../../firebaseConfig';
import { useSelector } from 'react-redux';

const CharacterInList = ({
  item,
  characterTab,
  addFavourite,
  takeFavourite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { data } = useSelector(state => state.application);

  useEffect(() => {
    const charactersRef = ref(db, 'favourites/');
    setIsFavorite(false);

    onChildAdded(charactersRef, (char) => {
      if (char.val().character.id === item.id) {
        setIsFavorite(true);
      }
    });

    onChildRemoved(charactersRef, (char) => {
      if (char.val().character.id === item.id) {
        setIsFavorite(false);
      }
    });

  }, [data]);

  const pulsateAnimation = useRef(new Animated.Value(1)).current;

  const pulsate = (positive = true) => {
    Animated.sequence([
      Animated.timing(pulsateAnimation, {
        toValue: positive ? 1.2 : 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(pulsateAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      takeFavourite(item);
      pulsate(false); // Negative pulsate 
    } else {
      addFavourite(item);
      pulsate(); // Positive pulsate 
    }
  };

  return (
    <Animated.View style={{ transform: [{ scale: pulsateAnimation }] }}>
      <View style={styles.itemRow}>
        <TouchableOpacity onPress={() => characterTab(item)}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.itemText}>{item.name}</Text>
            {!isFavorite && (
              <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite()}>
                <Image style={styles.favoriteImage} source={require('../../assets/likeVacio.png')} />
              </TouchableOpacity>
            )}
            {isFavorite && (
              <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite()}>
                <Image style={styles.favoriteImage} source={require('../../assets/likeLleno.png')} />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default CharacterInList;
