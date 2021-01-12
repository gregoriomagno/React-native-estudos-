import React from 'react'
import {Text,StyleSheet,View} from 'react-native'

const style = StyleSheet.create({
    display:{
        flex: 1,
        padding:10,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
        
    },
    displayValue:{
        fontSize: 60,
        color: '#f0f0f0',
        
    }
})

export default props => {
    return(
    <View style={style.display}>
        <Text style={style.displayValue}>
        {props.value}
        </Text>
    </View>
    )
}
