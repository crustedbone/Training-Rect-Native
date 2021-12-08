import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SettingDetails({ route, navigation }) {
    const { param1, param2, param3 } = route.params
    const getString = (StringData) => {
        if (StringData == undefined) {
            return null
        } else {
            return JSON.parse(JSON.stringify(StringData))
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting Details Screen</Text>
            <Text>{getString(param3)}</Text>
            <Button title={getString(param1)} onPress={() => navigation.navigate("SettingDetails", { param1: "720p", param2: "1080p", param3: "This 720p" })} />
            <Button title={getString(param2)} onPress={() => navigation.navigate("SettingDetails", { param1: "720p", param2: "1080p", param3: "This 1080p" })} />

        </View>
    )
}
