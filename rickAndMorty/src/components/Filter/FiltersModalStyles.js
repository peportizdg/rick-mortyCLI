// FiltersModalStyles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    height: 400,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#97ce4c',
    borderWidth: 2,
  },
  fixedFilters: {
    flexDirection: "row",
    marginTop: '6%',
    marginBottom: '3%',
  },
  filterTitle: {
    color: '#97ce4c',
    flex: 1,
    fontSize: 20,
  },
  filterTitle2: {
    color: '#97ce4c',
    fontSize: 20,
  },
  textFilters: {
    borderColor: '#97ce4c',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: '3%',
    flex: 0,
    color: '#97ce4c',
    alignSelf: 'center',
    alignContent: 'center',
    paddingHorizontal: '1%',
  },
  textInputFilters: {
    flexDirection: "row",
    marginTop: '1%',
    flex: 2,
    marginBottom: '1%',
  },
  filterTextInputStyle: {
    borderWidth: 1,
    marginBottom: '5%',
    borderColor: '#97ce4c',
    backgroundColor: 'black',
    textDecorationColor: 'white',
    color: '#97ce4c',
    width: 200,
    textAlign: 'center',
    marginRight: '5%',
    padding: '2%',
  },
  fixedFilters2: {
    flexDirection: "row",
    marginTop: '2%',
    flex: 2,
    marginBottom: '10%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  fixedFilters3: {
    flexDirection: "row",
    marginTop: '1%',
    marginBottom: '0.1%',
  },
  genderFilters: {
    borderColor: '#97ce4c',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: '1%',
    color: '#97ce4c',
    alignSelf: 'center',
    alignContent: 'center',
  },
  closeButtons: {
    flexDirection: "row",
    marginTop: '1%',
    marginBottom: '0.1%',
    padding: '5%',
  },
  closeButtonText: {
    width: 100,
    marginLeft: '5%',
    paddingLeft: '8%',
    borderColor: '#97ce4c',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: '1%',
    color: '#97ce4c',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 20,
  }
});

export default styles;

