import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Setting({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button
                title="Display Setting"
                onPress={() => {
                    navigation.navigate('SettingDetails', {
                        param1: "720p",
                        param2: "1080p"
                    });
                }}
            />
        </View>
    )
}
