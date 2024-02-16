import React, { useRef } from 'react';
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import styles from './CharacterInListStyles';

const CharacterInListFavorite = ({
  item,
  characterTab,
  takeFavourite,
  commentTab,
}) => {
  item = item.character;

  const fadeOutAnimation = useRef(new Animated.Value(1)).current;
  const pulsateAnimation = useRef(new Animated.Value(1)).current;
  const swipeLeftAnimation = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    Animated.timing(fadeOutAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => takeFavourite(item));
  };

  const toggleFavorite = () => {
    Animated.timing(swipeLeftAnimation, {
      toValue: -350,
      duration: 500,
      useNativeDriver: true,
    }).start(() => fadeOut());
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
    <Animated.View style={{ opacity: fadeOutAnimation }}>
      <Animated.View style={[styles.itemRow,{ transform: [{ translateX: swipeLeftAnimation }] }] }>
        <TouchableOpacity onPress={() => { characterTab(item); pulsate(); }}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite()}>
              <Image style={styles.favoriteImage} source={require('../../assets/fullfav.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentButton} onPress={() => commentTab(item)}>
              <Image style={styles.favoriteImage} source={require('../../assets/comment.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default CharacterInListFavorite;
