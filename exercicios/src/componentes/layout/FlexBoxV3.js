import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Estilo from '../estilo'
import Quadrado from './Quadrado'
export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#f00' lado={100}/>
            <Quadrado cor='#0f0' lado={50} />
            <Quadrado cor='#00f' lado={20}/>
        </View>
    )
}
const style = StyleSheet.create({
    FlexV3:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "flex-end",
        height:350,
        width: '100%',
        backgroundColor:'#A90',
        
        

    }
})