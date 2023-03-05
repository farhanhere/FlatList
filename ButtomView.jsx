import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function ButtonView() {

  return (
    <View style={styles.container}>
        <Text style={{fontSize:20,marginTop:40,marginLeft:140}}> Thankyou </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'white',
  },
 

});
