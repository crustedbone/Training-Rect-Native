import React from 'react'
import { View, Text } from 'react-native'
import TopBar from '../BarNav/TopBar'

export default function ProfileDetail() {
    return (
        <View>
            <TopBar back={true} title="My Account"/>
            <Text></Text>
        </View>
    )
}
