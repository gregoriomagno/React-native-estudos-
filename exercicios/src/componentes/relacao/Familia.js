import React from 'react'
import { Text } from 'react-native'


export default props => {
    return (
        <>
        <Text>Membros da familia: </Text>
           {props.children}
        </>
    )
}