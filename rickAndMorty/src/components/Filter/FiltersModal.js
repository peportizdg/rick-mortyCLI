import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from './FiltersModalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus, setSpecies, setType, setGender, setShowModal, setpageCurrent } from '../../store/Reducers';

const FiltersModal = ({
  rerender,
}) => {
  const dispatch = useDispatch();
  const { showModal, species, type, status, gender } = useSelector(state => state.application);

  return (
    <Modal transparent={true} visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalCard}>
          <View style={styles.fixedFilters}>
            <Text style={styles.filterTitle}> Status: </Text>
            <TouchableOpacity onPress={() => { dispatch(setpageCurrent(1)); dispatch(setStatus("dead")) }} style={{ borderColor: status === 'dead' ? '#fff' : '#97ce4c' }}>
              <Text style={styles.textFilters}> Dead </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { dispatch(setpageCurrent(1)); dispatch(setStatus("alive")) }} style={{ borderColor: status === 'alive' ? '#fff' : '#97ce4c' }}>
              <Text style={styles.textFilters}> Alive </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { dispatch(setpageCurrent(1)); dispatch(setStatus("unknown")) }} style={{ borderColor: status === 'unknown' ? '#fff' : '#97ce4c' }}>
              <Text style={styles.textFilters}> Unknown </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInputFilters}>
            <Text style={styles.filterTitle}> Species: </Text>
            <TextInput
              style={styles.filterTextInputStyle}
              placeholder="Search by species"
              placeholderTextColor='#97ce4c'
              value={species}
              onChangeText={newText => { dispatch(setSpecies(newText)); dispatch(setpageCurrent(1)) }}
            />
          </View>
          <View style={styles.textInputFilters}>
            <Text style={styles.filterTitle}> Type: </Text>
            <TextInput
              style={styles.filterTextInputStyle}
              placeholder="Search by type"
              placeholderTextColor='#97ce4c'
              value={type}
              onChangeText={newText => { dispatch(setType(newText)); dispatch(setpageCurrent(1)) }}
            />
          </View>
          <View style={styles.fixedFilters2}>
            <Text style={styles.filterTitle2}> Gender:</Text>
            <View style={styles.fixedFilters3}>
              <TouchableOpacity onPress={() => { dispatch(setpageCurrent(1)); dispatch(setGender("female")) }}>
                <Text style={styles.genderFilters}> Female </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { dispatch(setpageCurrent(1)); dispatch(setGender("male")) }}>
                <Text style={styles.genderFilters}> Male </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { dispatch(setpageCurrent(1)); dispatch(setGender("genderless")) }}>
                <Text style={styles.genderFilters}> Genderless </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { dispatch(setpageCurrent(1)); dispatch(setGender("unknown")) }}>
                <Text style={styles.genderFilters}> Unknown </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.closeButtons}>
          <TouchableOpacity onPress={() => dispatch(setShowModal(false))}>
            <Text style={styles.closeButtonText}>Apply</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(setShowModal(false))}>
            <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    </Modal>
  )
}

export default FiltersModal;