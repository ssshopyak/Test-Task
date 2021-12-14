import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

const App = () => {
  return(
    <View style={styles.container} >
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  });

export default App; 

