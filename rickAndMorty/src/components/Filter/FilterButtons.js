import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal, setStatus, setSpecies, setType, setGender, setpageCurrent } from '../../store/Reducers';

const FilterButtons =({
    rerender,
    clearModalFilters,
    clearFilters
}) => {
    const dispatch = useDispatch(); 
    const { status, species, type, gender } = useSelector(state => state.application);

    const handleClearFilters = () => {
        // Dispatch actions to clear and reset filters
        dispatch(setStatus(null));
        dispatch(setSpecies(''));
        dispatch(setType(''));
        dispatch(setGender(null));
        dispatch(setpageCurrent(1));

        // Optionally, you can also clear any modal-specific filters
        clearFilters();
        rerender();
    };

    return(
        <View style={styles.buttonsContainer}> 
            <TouchableOpacity style={styles.buttons} onPress={() => rerender()}>
                <Text style={styles.buttonsText}> Apply </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {dispatch(setShowModal(true)); clearModalFilters()}}>
                <Text style={styles.buttonsText}> More Filters </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={handleClearFilters}>
                <Text style={styles.buttonsText}> Clear Filters </Text>
            </TouchableOpacity>
        </View>
    );
}

export default FilterButtons;

const styles = StyleSheet.create({
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 12,
        borderRadius: 4,
        borderColor: '#97ce4c',
        borderWidth: 2,
        elevation: 3,
        backgroundColor: 'black',
        marginHorizontal: 3,
        marginBottom: 20,
    },
    buttonsText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#97ce4c',
        alignContent: 'center',
    },
    buttonsContainer:{
        flexDirection:"row", 
        flex: 3,
        alignSelf: 'center',
    }
});
