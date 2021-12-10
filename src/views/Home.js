import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native'
// import SettingsScreen from './Setting';

export default function Home({ navigation }) {
    const Tab = createBottomTabNavigator();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {/* <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            /> */}
            <Button
                title="Contact Page"
                onPress={() => {
                    navigation.navigate('Contacts', {
                        id: 1,
                        noHp: "+6285719593421",
                        name: "Raihan"
                    });
                }}
            />
            <Button
                title="Utility First"
                onPress={() => {
                    navigation.navigate('UtilityFirstEx');
                }}
            />
            <Button
                title="Native Bar Tab"
                onPress={() => {
                    navigation.navigate('NBTab');
                }}
            />
            <Button
                title="Flat list"
                onPress={() => {
                    navigation.navigate('FlatList');
                }}
            />
        </View>
    )
}
