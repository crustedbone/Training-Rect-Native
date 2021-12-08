// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native'
import SettingsScreen from '../views/Setting';
import HomeScreen from '../views/Home';
import Search from '../views/Search';
import NBHW from '../views/NBHW';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionics from 'react-native-vector-icons/Ionicons'

export default function HomeTab() {
    const Tab = createMaterialBottomTabNavigator();
    return (
        // <Tab.Navigator>
        //     <Tab.Screen name="Home" component={HomeScreen} />
        //     <Tab.Screen name="Search" component={Search} />
        //     <Tab.Screen name="HelloWorld NB" component={NBHW} />
        //     <Tab.Screen name="Settings" component={SettingsScreen}  options={{ headerShown: false }} />
        // </Tab.Navigator>
        <Tab.Navigator
            activeColor="#2A2F33"
            inactiveColor="#BBB6A5"
            labeled={false}
            barStyle={{ backgroundColor: '#8C9491' }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Ionics name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color }) => (
                    <Ionics name="search" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="HelloWorld NB" component={NBHW} options={{
                tabBarIcon: ({ color }) => (
                    <Ionics name="person-add" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Ionics name="settings" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    )
}
