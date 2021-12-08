import React, { useEffect, useState } from 'react'
import { View, Text, Platform, PermissionsAndroid, Button } from 'react-native'
import GeolocationCommunity from 'react-native-geolocation-service'

export default function Geolocation() {
    const [currentLatitude, setCurrentLatitude] = useState("")
    const [currentLongitude, setCurrentLongitude] = useState("")

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS == 'ios') {
                // getOneTimeLocation();
                subscribeLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location'
                        },
                    );

                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        // getOneTimeLocation();
                        subscribeLocation();
                    } else {
                        //setLocationStatus('Permission Denied');
                    }
                } catch (e) {
                    console.warn(e)
                }
            }
        };
        requestLocationPermission();
        return () => {
            GeolocationCommunity.clearWatch(watchID);
        }
    }, []);

    const getOneTimeLocation = () => {
        GeolocationCommunity.getCurrentPosition((position) => {
            const currentLongitude = JSON.stringify(position.coords.longitude);
            const currentLatitude = JSON.stringify(position.coords.latitude);
            setCurrentLatitude(currentLatitude);
            setCurrentLongitude(currentLongitude);
        }, (error) => {
            console.log(error.message);
            // setLoading(false);
        }, {
            enableHighAccuracy: false,
            timeout: 3000,
            maximumAge: 1000
        });
    };

    const subscribeLocation = () => {
        console.log("000 masuk")
        watchID = GeolocationCommunity.watchPosition((position) => {
            const currentLongitude = position.coords.longitude;
            const currentLatitude = position.coords.latitude;
            console.log("+++", position)
            setCurrentLatitude(currentLatitude);
            setCurrentLongitude(currentLongitude);
        }, (error) => {
            console.log(error.message);
            console.log.log("kesini")
            // setLoading(false);
        }, {
            enableHighAccuracy: true,
            distanceFilter: 10,
            maximumAge: 100
        });

        console.log("Keluar")
    };

    return (
        <View>
            <Text>GeoLoc</Text>
            <Text>Longitude: {currentLongitude}</Text>
            <Text>Latitude: {currentLatitude}</Text>
            <Button title="subscireb" onPress={() => subscribeLocation()} />
        </View>
    )
}
