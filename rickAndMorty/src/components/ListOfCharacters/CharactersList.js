import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import CharacterInList from '../CharacterCard/CharacterInList';
import { useSelector } from 'react-redux';


const CharactersList = ({
    handleLoadMore,
    renderFooter,
    characterTab,
    flatList,
    addFavourite,
    takeFavourite,
    data,

})=> {
 /* const [listKey, setListKey] = useState(0);

  useEffect(() => {
      // Update the key whenever the data array changes
      setListKey(prevKey => prevKey + 1);
  }, [data]);*/
  //const {data}  = useSelector(state => state.application);*/

  
return(
    <View style={{flex:28}}>
      <FlatList
          //key={listKey.toString()}
          ref={flatList}
          style={styles.container}
          data={data}
          renderItem= {({ item }) => {
            return (
            <CharacterInList
            item = {item}
            characterTab = {characterTab}
            addFavourite= {addFavourite}
            takeFavourite= {takeFavourite}
            ></CharacterInList>)
          }}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5} 
      />
      </View>
      
)
 }

export default CharactersList;


  const styles = StyleSheet.create({
    container: {
      alignContent: 'center',
      width: 1000,
    }
  });
  