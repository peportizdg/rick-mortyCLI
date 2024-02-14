import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from './FiltersModalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus, setSpecies, setType, setGender, setShowModal, setpageCurrent } from '../../store/Reducers';

const FiltersModal = ({ rerender }) => {
  const dispatch = useDispatch();
  const { showModal, species, type, status, gender } = useSelector(state => state.application);

  // State to track the active status of filters
  const [activeStatus, setActiveStatus] = useState(status);
  const [activeGender, setActiveGender] = useState(gender);

  const toggleStatus = (newStatus) => {
    dispatch(setpageCurrent(1));
    dispatch(setStatus(newStatus));
    setActiveStatus(newStatus === activeStatus ? null : newStatus);
  };

  const toggleGender = (newGender) => {
    dispatch(setpageCurrent(1));
    dispatch(setGender(newGender));
    setActiveGender(newGender === activeGender ? null : newGender);
  };

  const getStatusStyle = (filterStatus) => {
    return activeStatus === filterStatus ? styles.activeFilter : styles.inactiveFilter;
  };

  const getGenderStyle = (filterGender) => {
    return activeGender === filterGender ? styles.activeFilter : styles.inactiveFilter;
  };

  return (
    <Modal transparent={true} visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalCard}>
          <View style={styles.fixedFilters}>
            <Text style={styles.filterTitle}> Status: </Text>
            <TouchableOpacity onPress={() => toggleStatus('dead')}>
              <Text style={getStatusStyle('dead')}>{'Dead'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleStatus('alive')}>
              <Text style={getStatusStyle('alive')}>{'Alive'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleStatus('unknown')} >
              <Text style={getStatusStyle('unknown')}>{'Unknown'}</Text>
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
              <TouchableOpacity onPress={() => toggleGender('female')}>
                <Text style={getGenderStyle('female')}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleGender('male')}>
                <Text style={getGenderStyle('male')}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleGender('genderless')}>
                <Text style={getGenderStyle('genderless')}>Genderless</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleGender('unknown')}>
                <Text style={getGenderStyle('unknown')}>Unknown</Text>
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
  );
};

export default FiltersModal;
