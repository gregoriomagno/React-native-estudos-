import React from 'react'
import {View, StyleSheet} from 'react-native'

import  Primeiro from './componentes/Primeiro'
import Comp,{Comp1,Comp2} from './componentes/Mult'
export default () => (
<View style ={style.App}>

    <Comp style={style.textStyle}/>
    <Comp1/>
    <Comp2/>
    <Primeiro/> 

</View>
)
const style = StyleSheet.create({
    App:{
        backgroundColor: '#eee',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
   
})


