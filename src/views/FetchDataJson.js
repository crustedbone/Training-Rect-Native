import { FlatList } from 'native-base';
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export default function FetchDataJson() {
    const [isLoading, setLoading] = useState(true);
    const [datas, setDatas] = useState([])

    const getDatas = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setDatas(json.movies);
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
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={datas}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
    )
}
