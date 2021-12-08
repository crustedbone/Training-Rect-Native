import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './src/navigations/HomeTab';
import Details from './src/views/Details'
import Contacts from './src/views/Contact';
import SettingDetails from './src/views/SettingDetails';
import UtilityFirstExample from './src/views/UtilityFirstEx';
import NBTab from './src/navigations/NBTab';
import MainRoot from './src/Belanja/Tab/MainRoot';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

function App() {
  return (
    //Start Stack Navigator
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="HomeTab">
    //     <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
    //     <Stack.Screen name="Details" component={Details} />
    //     <Stack.Screen name="Contacts" component={Contacts} />
    //     <Stack.Screen name="UtilityFirstEx" component={UtilityFirstExample} />
    //     <Stack.Screen name="SettingDetails" component={SettingDetails} />
    //     <Stack.Screen name="NBTab" component={NBTab} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //End Stack Navigator


    //Start Bottom-Tab Nav
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    //End Bottom-Tab Nav
    
    <NativeBaseProvider>
      <MainRoot />
    </NativeBaseProvider>

  );
}

export default App;
