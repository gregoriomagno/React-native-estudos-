import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

// import Comp, { Comp1, Comp2 } from './componentes/Mult'
// import Primeiro from './componentes/Primeiro'

// import MinMax from './componentes/MinMax'
// import Aleatorio from './componentes/Aleatorio'
// import Titulo from './componentes/Titulo'
// import Botao from './componentes/Botao'
// import Contador from './componentes/Contador'
// import Pai from './componentes/indireta/Pai'
// import ContadorV2 from './componentes/contador/ContadorV2'
// import ParImpar from './componentes/ParImpar'
//import Familia from './componentes/relacao/Familia'
//import Membro from './componentes/relacao/Membro'
//import UsuarioLogado from './componentes/UsuarioLogado'

//import ListaProdutos from './componentes/produtos/ListaProdutos'
//import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2'
//import DigiteSeuNome from './componentes/DigiteSeuNome'
//import FlexBoxV1 from './componentes/layout/FlexBoxV1'
// import FlexBoxV2 from './componentes/layout/FlexBoxV2'
// import FlexBoxV3 from './componentes/layout/FlexBoxV3'
//import FlexBoxV4 from './componentes/layout/FlexBoxV4'
import Mega from './componentes/mega/Mega'
export default () => {
    return <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={12}/>
        {/* <Aleatorio max = {100} min={1}/>
    <FlexBoxV4/>
        <FlexBoxV3 />
        <FlexBoxV2 />
        <FlexBoxV1/>
        <ListaProdutosV2/>
        <DigiteSeuNome />
        <ListaProdutos />
        <UsuarioLogado usuario={ {nome: 'Greg', email: 'gre@greg.com'} }/>
        <UsuarioLogado usuario={{ nome: 'greg2', email: 'gre@greg.com' }} />
    <Familia>
            <Membro nome="Bia" sobrenome ="Arruda"/>
            <Membro nome="Ana" sobrenome="Arruda" />
    </Familia>
        <Familia>
            <Membro nome="Bia" sobrenome="Silva" />
            <Membro nome="Ana" sobrenome="Silva" />
        </Familia>
        <ParImpar num={3} />
         <ContadorV2/> 
        <Pai/>
        <Contador inicial={3}/>
        <Botao/>
        <Titulo principal="Cadastro"
            secundario="Tela de cadastro do produto"
        />
    <MinMax min={3} max={20}/>
         <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro />  */}
    </SafeAreaView>
}
const style = StyleSheet.create({
    App: {
        backgroundColor: '#FFF',

        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20


    }
})
