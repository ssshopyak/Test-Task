import React from 'react';
import { Text, View, StyleSheet,} from 'react-native';


export default function Afterlogin() {
    
    return(
        <View style={styles.container}>
         <Text>Nice to meet you</Text>
        </View>
    )
  
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#d4ac87',
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 