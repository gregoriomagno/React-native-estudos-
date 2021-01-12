import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>

        </View>
    )
}
const style = StyleSheet.create({
    FlexV4:{
        flexGrow:1,
        width: 100,
        backgroundColor:'#A90',
    },
    V:{
        backgroundColor: "#0f0",
        height:  0,
    },
    V1: {
        backgroundColor: "#f00",
        flexGrow:1,
    },
    V2: {
        backgroundColor: "#00f",
        flexGrow:1,
    }
})