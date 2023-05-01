import React  from 'react';
import {Text, View, StyleSheet } from 'react-native';


const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30
  },
  item: {
    backgroundColor: '#1abc9c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  form: {
    width: '100%',
    height: 60,
    marginTop: 100,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    width: '100%', borderColor: 'gray', borderWidth: 1, 
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    height: 40,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#16a085',
    alignSelf: 'flex-end',
    height: 30,
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '20%',
    textAlign: 'right'
  },
  list: {
    marginTop: 12
  }
});


export default YourApp;