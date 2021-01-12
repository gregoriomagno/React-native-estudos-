import React from 'react'
import { Button } from 'react-native'

export default () => {
    function executar() {
        console.warn('exec #01 !!!')
    }
    return (
        <>
            <Button title="Executar #01"
                onPress={executar}
            />
            <Button title="Executar #02"
                onPress={function () {
                    console.warn('exec #02 !!')
                }}

            />
            <Button title="Executar #02"
                onPress={() => console.warn('exec #03 !!')
                }
            />

        </>
    )
}