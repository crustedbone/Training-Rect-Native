import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStrore() {

    const [storeDataState, setStoreDataState] = useState(null)

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@storage_Key', "test valueEEEEEEE")
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if (value !== null) {
                setStoreDataState(value)
            }
        } catch (e) {
            // error reading value
        }
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Button
                title="SOTTTREEE"
                onPress={storeData}
            />
            <Button
                title="GETTTT"
                onPress={getData}
            />
            <Text b>{storeDataState}</Text>
        </View>
    )
}
