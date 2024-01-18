import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalCard: {
        width: '90%',
        height: '40%',
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#97ce4c',
        borderWidth: 1
      },
    filterTitle: {
        color: '#97ce4c',
        flex: 1,
        fontSize: 20,
        
        },
        filterTitle2: {
            color: '#97ce4c',
            flex: 1,
            fontSize: 20,
            paddingLeft: 0.1,
            marginRight: '75%'
            
            },
        textFilters: {
            borderColor: '#97ce4c',
            borderWidth: 0.5,
            borderRadius: 5,
            marginHorizontal: '2.8%',
            flex: 1,
            color: '#97ce4c',
            alignSelf: 'center',
            alignContent: 'center',
            paddingTop: '1%',
            padding: '1%'
          },
          textInputFilters: {
            flexDirection: "row",
            flex: 2,
          },
          filterTextInputStyle: {
            borderWidth: 1,
            marginBottom: '5%',
            borderColor: '#97ce4c',
            backgroundColor: 'black',
            textDecorationColor: 'white',
            color: '#97ce4c',
            width: 300,
            height: 60,
            textAlign: 'center',
            marginTop: '10%',
            marginRight: '10%',
            padding: '2%',
          },

          butons: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 2,
            paddingHorizontal: 3,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
            marginHorizontal: 3,
            marginBottom:15,
          },
          butonsText: {
            width: 100,
            paddingLeft: '8%',
            borderColor: '#97ce4c',
            borderWidth: 2,
            borderRadius: 10,
            marginHorizontal: '1%',
            color: '#97ce4c',
            alignSelf: 'center',
            alignContent: 'center',
            fontSize: 20,
          },
          commentButtons: {
            flexDirection: 'row',
            flex: 0.5,
          },
  });

  export default styles;