import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BottomTab from './BottomTab';
import HistoryBelanja from '../views/HistoryBelanja'
import ProfileDetail from '../views/ProfileDetail';

export default function MainRoot() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTab">
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
                <Stack.Screen name="HistoryBelanja" component={HistoryBelanja} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
