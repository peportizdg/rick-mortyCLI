import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import CharacterInListFavorite from '../CharacterCard/CharacterInListFavorite';
import { useSelector } from 'react-redux';

const CharactersListFavorite = ({
    renderFooter,
    commentTab,
    characterTab,
    flatList,
    takeFavourite
}) => {
    const { favs } = useSelector(state => state.application);
    const [listKey, setListKey] = useState(0);

    useEffect(() => {
        // Update the key whenever the favs array changes
        setListKey(prevKey => prevKey + 1);
    }, [favs]);

    return (
        <View style={{ flex: 28 }}>
            <View style={{ backgroundColor: 'black' }}>
                <Text style={{ fontSize: 25, color: '#97ce4c', alignSelf: 'center', marginLeft: '5%' }}>Your favorite characters</Text>
            </View>
            <FlatList
                key={listKey.toString()} // Use the key prop to force re-render when favs change
                ref={flatList}
                style={styles.container}
                data={favs}
                renderItem={({ item }) => {
                    return (
                        <CharacterInListFavorite
                            item={item}
                            characterTab={characterTab}
                            takeFavourite={takeFavourite}
                            commentTab={commentTab}
                        />
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.2}
            />
        </View>
    )
}

export default CharactersListFavorite;

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
    }
});
