import React from 'react';
import { Text, View, Modal, Image} from 'react-native';
import styles from './BusquedaVaciaModalStyles';
import { useSelector ,useDispatch} from 'react-redux';
import { setfilterSucces} from '../../store/Reducers';

const BusquedaVaciaModal =({
}) => {
    const dispatch = useDispatch(); 
    const { filterSucces }  = useSelector(state => state.application);
    return(
        <Modal transparent={true} visible={filterSucces} animationType="slide">
          <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
          <View>
          <Image style={styles.notFoundImage} source={require('../../assets/notFound.png')} /> 
          <Text style={styles.itemTextChar}> Search Unsuccesful </Text>
          </View>
          <Text onPress={() => {dispatch(setfilterSucces(false))}} style={styles.itemTextCerrar}>Close</Text>
          </View>
          </View>
      </Modal>
    )
}

export default BusquedaVaciaModal;
