import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Estilo from '../estilo'
import Quadrado from './Quadrado'
export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor='#0f0' />
            <Quadrado cor='#00f' />
        </View>
    )
}
const style = StyleSheet.create({
    FlexV2:{
        flex:1,
        width: '100%',
        backgroundColor:'#A90',
        justifyContent:"space-evenly",
        alignItems: "flex-end"
        

    }
})