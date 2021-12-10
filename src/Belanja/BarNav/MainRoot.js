import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { createContext, useState } from 'react'
import BottomTab from './BottomTab';
import HistoryBelanja from '../views/HistoryBelanja'
import ProfileDetail from '../views/ProfileDetail';

export const RootContext = createContext();

export default function MainRoot() {
    //Context
    const Provider = RootContext.Provider;

    //StackNav
    const Stack = createNativeStackNavigator();

    //State
    const [uToken, setUToken] = useState('')
    const [uName, setUName] = useState()
    const [mail, setMail] = useState()


    return (
        <NavigationContainer>
            {/* <Provider value={{uToken, setUToken, uName, setUName}} > */}
            <Provider value={{uName, setUName, mail, setMail}} >
                <Stack.Navigator initialRouteName="BottomTab">
                    <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                    <Stack.Screen name="ProfileDetail" component={ProfileDetail} options={{ headerShown: false }} />
                    <Stack.Screen name="HistoryBelanja" component={HistoryBelanja} options={{ headerShown: false }} />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    )
}
