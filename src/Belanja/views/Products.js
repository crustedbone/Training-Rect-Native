import { Box, Image, Pressable, ScrollView, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
export default function Products() {
    const Products = { spSonicPro: require('../image/SoundPeats_Sonic_Pro.jpg'), spT2: require('../image/SoundPeats_T2.jpg') }
    return (
        <Box p="4" >
            <ScrollView>
                <Box display="flex" flexDirection="row" justifyContent="space-evenly">
                    <Pressable>
                        <Box p="2">
                            <Image source={Products.spSonicPro} size={40} alt="Alternate Text" />
                        </Box>
                    </Pressable>
                    <Pressable>
                        <Box p="2">
                            <Image source={Products.spT2} size={40} alt="Alternate Text" />
                        </Box>
                    </Pressable>
                </Box>
            </ScrollView>
        </Box>

    )
}
