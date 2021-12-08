import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Contact({ route, navigation }) {
    const {id, noHp, name} = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contact</Text>
            <Text>Nama: {JSON.parse(JSON.stringify(name))}</Text>
            <Text>Nomor handphone: {JSON.stringify(noHp)}</Text>
            <Button
                title="Detail Page"
                onPress={() => navigation.navigate('Details', {
                    itemId: 0
                })}
            />
        </View>
    )
}
