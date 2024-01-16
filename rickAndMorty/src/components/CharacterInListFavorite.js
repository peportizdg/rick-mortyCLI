import React, { useRef } from 'react';
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import styles from '../styles/CharacterInListStyles';

const CharacterInListFavorite = ({
  item,
  characterTab,
  takeFavourite,
  commentTab,
}) => {
  item = item.character;

  const fadeOutAnimation = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeOutAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => takeFavourite(item));
  };

  const toggleFavorite = () => {
    fadeOut();
  };

  return (
    <Animated.View style={{ opacity: fadeOutAnimation }}>
      <View style={styles.itemRow}>
        <TouchableOpacity onPress={() => characterTab(item)}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite()}>
              <Image style={styles.favoriteImage} source={require('../../assets/likeLleno.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => commentTab(item)}>
              <Image style={styles.favoriteImage} source={require('../../assets/comment.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default CharacterInListFavorite;

