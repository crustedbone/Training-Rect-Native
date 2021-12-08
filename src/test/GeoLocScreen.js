import React, {useState, useEffect} from 'react'
import { View, Text, PermissionsAndroid, Platform, Button } from 'react-native'
import Geolocation from '@react-native-community/geolocation';


export default function GeoLocScreen() {

    const [currentLattitude, setCurrentLattitude] = useState('');
    const [currentLongitude, setCurrentLongitude] = useState('');

    useEffect(() => {
        const requestLocationPermission = async () => {
            if(Platform.OS === 'ios') {
                // getOneTimePermission();
                subscribeLocationLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            'title': 'Location Access Required',
                            'message': 'This App needs to Access your location'
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        // getOneTimePermission();
                        subscribeLocationLocation();
                        // console.log("You can use the location")
                    } else {
                        // setLocationStatus("Permission denied");
                        // console.log("Location permission denied")
                    }
                } catch (err) {
                    console.warn(err)
                }
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchId);
        };
    }, []);

    const getOneTimePermission = async () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLattitude = JSON.stringify(position.coords.latitude);
                setCurrentLongitude(currentLongitude);
                setCurrentLattitude(currentLattitude);
            },
            (error) => {
                console.warn(error.message);
                // setLoading(false);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000,
            }
        )
    }

    const subscribeLocationLocation = () => {
        console.log("SCREEN MASUK")
        watchId = Geolocation.watchPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLattitude = JSON.stringify(position.coords.latitude);
                console.log(position);
                setCurrentLongitude(currentLongitude);
                setCurrentLattitude(currentLattitude);
            },
            (error) => {
                console.log(error.message);
            },
            {enableHighAccuracy: true, maximumAge:10, distanceFilter: 1}
        )

        console.log("SCREEEN KELUAR")
    }

    
    

    return (
        <View>
            <Text style={{color:'grey'}}>Geolocation</Text>

            <Text style={{color:'grey'}}>Lat : {currentLattitude}</Text>
            <Text style={{color:'grey'}}>Long: {currentLongitude}</Text>
            <Button title="subscireb" onPress={() => subscribeLocationLocation()} />
        </View>
    )
}
