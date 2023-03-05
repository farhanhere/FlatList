import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function TopView() {

  return (
    <View style={styles.container}>
        <Text style={{fontSize:20,marginTop:40,marginLeft:120}}> Hello Welcome! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'white',
    
  },
 

});
