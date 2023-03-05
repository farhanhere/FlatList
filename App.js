import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import TopView from './TopView';
import CentreView from './CentreView';
import ButtomView from './ButtomView';

export default function App() {
  
 
  return (
    
    <View style={styles.container}>
        <TopView/>
        <CentreView/>
        <ButtomView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
   

});
