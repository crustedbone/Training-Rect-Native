import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import Cart from '../views/Cart';
import Home from '../views/Home';
import Products from '../views/Products';
import Profile from '../views/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function BottomTab() {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#457b9d' }} activeColor="#1d3557" inactiveColor="#a8dadc">
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color }) => (<Ionicons name="home" color={color} size={25} />) }} />
            <Tab.Screen name="Products" component={Products} options={{ tabBarIcon: ({ color }) => (<Ionicons name="search-circle" color={color} size={25} />) }} />
            <Tab.Screen name="Cart" component={Cart} options={{ tabBarIcon: ({ color }) => (<Ionicons name="basket" color={color} size={25} />) }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="baby-face" color={color} size={25} />) }} />
        </Tab.Navigator>
    )
}
