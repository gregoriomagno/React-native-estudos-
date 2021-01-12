import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos'
export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text key={p.id}>{p.id}) {p.nome} custa R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={Estilo.txtG}>Lista de produtosV2</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />



        </>
    )
}