import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native'
import GeolocationService from 'react-native-geolocation-service';


export default function Maps() {
    const [markerLongitude, setMarkerLongitude] = useState(0);
    const [markerLatitude, setMarkerLatitude] = useState(0);
    const [currentLongitude, setCurrentLongitude] = useState(106.8271957126865);
    const [currentLatitude, setCurrentLatitude] = useState(-6.175221730228607);
    const [flagMarker, setFlagMarker] = useState(false)

    const styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFillObject,
            height: 400,
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },
    });

    useEffect(() => {
        const requestLocationPermission = async () => {
            await sleep(1000);
            if (Platform.OS == 'ios') {
                getOneTimeLocation();
                // subscribeLocation();
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
                        getOneTimeLocation();
                        // subscribeLocation();
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
            // GeolocationCommunity.clearWatch(watchID);
        }
    }, []);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const getOneTimeLocation = () => {
        GeolocationService.getCurrentPosition((position) => {
            const currentLongitude = parseFloat(JSON.stringify(position.coords.longitude));
            const currentLatitude = parseFloat(JSON.stringify(position.coords.latitude));
            console.log("+++", JSON.stringify(position.coords.latitude))
            console.log("+++", JSON.stringify(position.coords.longitude))
            setCurrentLatitude(currentLatitude);
            setCurrentLongitude(currentLongitude);
            setMarkerLatitude(currentLatitude);
            setMarkerLongitude(currentLongitude);
            setFlagMarker(true)
        }, (error) => {
            console.log(error.message);
            // setLoading(false);
        }, {
            enableHighAccuracy: false,
            timeout: 3000,
            maximumAge: 1000
        });
    };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.0121,
                }}
            >
                {setFlagMarker ? <Marker coordinate={{ latitude: markerLatitude, longitude: markerLongitude }} /> : null}

            </MapView>


        </View>
    )
}