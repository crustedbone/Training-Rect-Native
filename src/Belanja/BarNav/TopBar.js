import React from 'react'
import { Box, HStack, Icon, IconButton, Text } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function TopBar({ title, back }) {
    const navigation = useNavigation()
    const buttonBack =
        <>
            <Pressable onPress={() => navigation.goBack()}>
                <Box mx="3">
                    <MaterialIcons name="arrow-back-ios" color="white" />
                </Box>
            </Pressable>
        </>

    return (
        <>
            <Box safeAreaTop backgroundColor="#457b9d" />

            <HStack bg='#457b9d' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    {/* <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} /> */}
                    {back ? buttonBack : <Box mx="3"></Box>}

                    <Text color="white" fontSize="20" fontWeight='bold'>{title}</Text>
                </HStack>
                <HStack space="2">
                    <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                        color="white" size='sm' />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
                </HStack>
            </HStack>
        </>
    )
}
