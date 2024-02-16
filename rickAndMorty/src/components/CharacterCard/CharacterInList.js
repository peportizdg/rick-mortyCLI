import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import styles from './CharacterInListStyles';
import { ref, onChildAdded, onChildRemoved } from "firebase/database";
import { db } from '../../../firebaseConfig.js';

const CharacterInList = ({
  item,
  characterTab,
  addFavourite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

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
        swipeRightAnimation.setValue(0);
      }
    });

  }, []);

  const swipeRightAnimation = useRef(new Animated.Value(0)).current;
  const pulsateAnimation = useRef(new Animated.Value(1)).current;

  const swipeRight = () => {
    Animated.timing(swipeRightAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => addFavourite(item));
  };

  const toggleFavorite = () => {
    swipeRight();
  };

  const pulsate = () => {
    Animated.sequence([
      Animated.timing(pulsateAnimation, {
        toValue: 1.1,
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

  return (
    <Animated.View style={[styles.animatedView, {
      opacity: swipeRightAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
      transform: [{
        translateX: swipeRightAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 500], // Adjust the distance for the swipe effect
        }),
      }],
    }]}>
      {!isFavorite && (
        <Animated.View style={[styles.itemRow,{
          transform: [{ scale: pulsateAnimation }],
        }]}>
          <TouchableOpacity
            onPress={() => {
              characterTab(item);
              pulsate();
            }}
          >
              <Image
              style={
                styles.itemImage}
              source={{ uri: item.image }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.itemText}>{item.name}</Text>
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => toggleFavorite()}
              >
                <Image
                  style={styles.favoriteImage}
                  source={require('../../assets/emptyfav.png')}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default CharacterInList;
