import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Estilo from '../estilo'
import Quadrado from './Quadrado'
export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado />
            <Quadrado cor='#0f0' />
            <Quadrado cor='#00f' />
        </View>
    )
}
const style = StyleSheet.create({
    FlexV1:{
        backgroundColor:'#A90',
        justifyContent:"center",
        flex:1

    }
})