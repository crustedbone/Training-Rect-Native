
import React from 'react';
import {
    NativeBaseProvider,
    Box,
    Text,
    Icon,
    HStack,
    Center,
    Pressable,
    StatusBar,
    IconButton,
    Button,
} from 'native-base';
// import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function NBFooter({ navigation }) {
    const [selected, setSelected] = React.useState(1);
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

            <Box safeAreaTop backgroundColor="#6200ee" />

            <HStack bg='#6200ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
                    <Text color="white" fontSize="20" fontWeight='bold'>Home</Text>
                </HStack>
                <HStack space="2">
                    <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                        color="white" size='sm' />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
                </HStack>
            </HStack>

            <Button onPress={() => navigation.goBack()} ><Text>Go back</Text></Button>

            <Box flex={1} bg="white" safeAreaTop>
                <Center flex={1}></Center>
                <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable
                        cursor="pointer"
                        opacity={selected === 0 ? 1 : 0.5}
                        py="3"
                        flex={1}
                        onPress={() => navigation.navigate('Home') }>
                        <Center>
                            <Icon
                                mb="1"
                                as={
                                    <MaterialCommunityIcons
                                        name={selected === 0 ? 'home' : 'home-outline'}
                                    />
                                }
                                color="white"
                                size="sm"
                            />
                            <Text color="white" fontSize="12">
                                Home
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable
                        cursor="pointer"
                        opacity={selected === 1 ? 1 : 0.5}
                        py="2"
                        flex={1}
                        onPress={() => setSelected(1)}
                    >
                        <Center>
                            <Icon
                                mb="1"
                                as={<MaterialIcons name="search" />}
                                color="white"
                                size="sm"
                            />
                            <Text color="white" fontSize="12">
                                Search
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable
                        cursor="pointer"
                        opacity={selected === 2 ? 1 : 0.6}
                        py="2"
                        flex={1}
                        onPress={() => setSelected(2)}
                    >
                        <Center>
                            <Icon
                                mb="1"
                                as={
                                    <MaterialCommunityIcons
                                        name={selected === 2 ? 'cart' : 'cart-outline'}
                                    />
                                }
                                color="white"
                                size="sm"
                            />
                            <Text color="white" font="12">
                                Cart
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable
                        cursor="pointer"
                        opacity={selected === 3 ? 1 : 0.5}
                        py="2"
                        flex={1}
                        onPress={() => setSelected(3)}
                    >
                        <Center>
                            <Icon
                                mb="1"
                                as={
                                    <MaterialCommunityIcons
                                        name={selected === 3 ? 'account' : 'account-outline'}
                                    />
                                }
                                color="white"
                                size="sm"
                            />
                            <Text color="white" fontSize="12">
                                Account
                            </Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>
        </NativeBaseProvider>
    );
}

