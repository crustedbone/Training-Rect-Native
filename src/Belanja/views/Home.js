import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Input, Text } from 'native-base'
import TopBar from '../BarNav/TopBar'
import { RootContext } from '../BarNav/MainRoot'

export default function Home() {

    const { uName, setUName, mail, setMail } = useContext(RootContext)

    const handleButton = ()=>{
        console.log("+++", uName)
        console.log("---", mail)
    }

    return (
        <>
            <TopBar title="Home" back={false} />
            <Box p="4" width="full" height="full">
                <Text>Welcome, {uName}</Text>
                <Input
                    mx="3"
                    w={{
                        base: "75%",
                        md: "25%",
                    }}
                    placeholder='Mail'
                    value={mail}
                    onChangeText={email => setMail(email)}
                />
                <Input
                    mx="3"
                    placeholder="Nama"
                    value={uName}
                    w={{
                        base: "75%",
                        md: "25%",
                    }}
                    onChangeText={name => setUName(name)}
                />
                <Button onPress={handleButton} />
            </Box>
        </>
    )
}
