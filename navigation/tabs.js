import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import Afterlogin from "../screens/AfterLogin";
import React from 'react';
import { Image, StyleSheet, View } from "react-native";

const Tabs = () => {
const Tab = createBottomTabNavigator();


    return(
        <Tab.Navigator
            style={styles.tabs}
            screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor:'#d4ac87' },}}
            tabBarOptions={{
                showLabel: false,
            }}
            >
                <Tab.Screen name='Categories'component={HomeScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                            source={require('../assets/Categor.png')}
                            resizeMode='contain'
                            style={styles.icon}
                            />
                        </View>            
                    ),
                }}/>
                  <Tab.Screen 
                name='AfterLogin' component={Afterlogin} options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            
                        </View>
                    )
                }}
                />
                <Tab.Screen name='Login'component={LoginScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                            source={require('../assets/Login.png')}
                            resizeMode='contain'
                            style={styles.icon}
                            />
                        </View>            
                    ),
                }}/>
              
            </Tab.Navigator>
    );

}

const styles = StyleSheet.create({
    tabs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    icon: {
        width:25,
        height:25,
    }
    });

export default Tabs;

