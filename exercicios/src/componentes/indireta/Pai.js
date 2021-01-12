import React,{useState} from 'react'
import Filho from '../indireta/Filho'
import estilo from '../estilo'
import {Text} from 'react-native'

export default props => {
    const [num,setNum] = useState(0)
    function exibirValor(numero) {
       setNum(numero)
    }
    return (
        <>
            
            <Text style={estilo.txtG}>{num} </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}