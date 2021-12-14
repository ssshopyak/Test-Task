import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, TextInput,SafeAreaView } from 'react-native';

const LoginScreen = ({navigation}) => {
    const log1 = 'ostap';
    const pas1 = 'shopyak';

    const log2 = 'shopyak';
    const pas2 = 'ostap';

    const log3 = 'shopyak228';
    const pas3 = 'ostap2014'

    const [textInputLogin, setTextInputLogin] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');
    if (textInputPassword === pas1 && textInputLogin === log1 ){
        console.log('congrats')
    }
    if (textInputPassword === pas2 && textInputLogin === log2 ){
      console.log('congrats')
    } 
    if (textInputPassword === pas3 && textInputLogin === log3 ){
      console.log('congrats')
    }
    
        return (
              <View style={styles.container}>
                <TextInput
                  placeholder="Enter Login"
                  onChangeText={
                    (login) => setTextInputLogin(login)
                  }
                  style={styles.textInputStyle}
                />
                <TextInput
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  onChangeText={
                    (password) => setTextInputPassword(password)
                  }
                  style={styles.textInputStyle}
                />
                <View style={{marginTop: 15}}>
                  <Button
                    disabled={!textInputPassword.trim()}
                    title="Submit"
                    onPress={() => navigation.navigate('AfterLogin')}
                    color="white" 
                  />
                </View>
              </View>
          );

};
export default LoginScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d4ac87',
    },
    textInputStyle: {
      width: '100%',
      height: 40,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      marginTop: 25,
    },
  });