import { Box, HStack, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Profile({ navigation }) {
    return (
        <Box p="4">
            <Pressable onPress={() => navigation.navigate("ProfileDetail")}>
                <Box
                    bg="#457b9d"
                    py="4"
                    px="3"
                    rounded={10}
                    alignSelf="center"
                    width="100%"
                >
                    <HStack justifyContent="space-between">
                        <Box justifyContent="space-between">
                            <VStack space="2">
                                <Text fontSize="md" color="white">
                                    <MaterialCommunityIcons name="medal" color="#a8dadc" size={20} />
                                    1000 points
                                </Text>
                                <Text color="white" fontSize="lg">
                                    Raihan Shidqi Putrandi
                                </Text>
                            </VStack>
                        </Box>
                        <MaterialCommunityIcons name="face-agent" size={80} />
                    </HStack>
                </Box>
            </Pressable>
            <Box mt="4" width="100%">
                <Pressable onPress={() => navigation.navigate("HistoryBelanja")}>
                    <Box
                        py="4"
                        px="3"
                        alignSelf="center"
                        width="100%"
                        borderWidth={1}
                        borderColor="#457b9d"
                        borderRadius={10}
                    >
                        <HStack space="2">
                            <MaterialCommunityIcons name="shopping" size={30} />
                            <Text alignSelf="center">History Belanja</Text>
                        </HStack>
                    </Box>
                </Pressable>
            </Box>
            <Box mt="6" alignSelf="center" width="100%" >
                <HStack space="4" pr="4">
                    <VStack space="3" width="1/2">
                        <Box
                            alignSelf="center"
                            width="full"
                            borderWidth={1}
                            borderColor="#457b9d"
                            borderRadius={10}
                        >
                            <Pressable android_ripple={{ color: 'black', borderless: true }} onPress={() => { }} py="4" px="3">
                                <Text alignSelf="center">WISH LIST</Text>
                            </Pressable>
                        </Box>
                        <Box
                            alignSelf="center"
                            width="full"
                            borderWidth={1}
                            borderColor="#457b9d"
                            borderRadius={10}
                        >
                            <Pressable android_ripple={{ color: 'black', borderless: true }} onPress={() => { }} py="4" px="3">
                                <Text alignSelf="center">FAVORIT</Text>
                            </Pressable>

                        </Box>
                    </VStack>
                    <VStack space="3" w="1/2">
                        <Box
                            alignSelf="center"
                            width="full"
                            borderWidth={1}
                            borderColor="#457b9d"
                            borderRadius={10}
                        >
                            <Pressable android_ripple={{ color: 'black', borderless: true }} onPress={() => { }} py="4" px="3">
                                <Text alignSelf="center">ONLY FOR YOU</Text>
                            </Pressable>
                        </Box>
                        <Box
                            alignSelf="center"
                            width="full"
                            borderWidth={1}
                            borderColor="#457b9d"
                            borderRadius={10}
                        >
                            <Pressable android_ripple={{ color: 'black', borderless: true }} onPress={() => { }} py="4" px="3">
                                <Text alignSelf="center">LAST VIEW</Text>
                            </Pressable>
                        </Box>
                    </VStack>
                </HStack>
            </Box>
        </Box >
    )
}
