import { Box, FlatList, NativeBaseProvider, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react'
// import { View, Text } from 'react-native'

export default function FlatListDetail({ route }) {
    const { detailData } = route.params
    const [isLoading, setLoading] = useState(true);
    const [datas, setDatas] = useState([])


    const getDatas = async () => {
        try {
            const url = 'http://dev-location-service-bkkbn.apps.tkp.platform.lintasarta.net/siga/location/getListKabupatenByIdProvinsi?id_provinsi=' + JSON.parse(JSON.stringify(detailData))
            const response = await fetch(url);
            const json = await response.json();
            console.log("+++", json)
            setDatas(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDatas();
    }, []);

    return (
        <NativeBaseProvider>
            <View>
                <FlatList
                    data={datas}
                    keyExtractor={(item) => item.id_kabupaten}
                    renderItem={({ item }) => (
                        <Box m="2"><Text>{item.nama_kabupaten}</Text></Box>
                    )}
                />
                {/* <Text>{JSON.stringify(datas[2].id_kabupaten)}</Text> */}
            </View>
        </NativeBaseProvider>
    )
}
