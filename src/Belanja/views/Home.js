import React from 'react'
import { Box } from 'native-base'
import TopBar from '../BarNav/TopBar'

export default function Home() {
    return (
        <>
            <TopBar />
            <Box p="4" width="full" height="full">
                Welcome, Rai
            </Box>
        </>
    )
}
