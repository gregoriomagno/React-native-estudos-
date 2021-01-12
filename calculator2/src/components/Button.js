import React  from 'react'
import {StyleSheet,Text,Dimensions,TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding:20,
        backgroundColor: '#000',
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'#888',
        

    },
    operationButton: {
        backgroundColor: 'rgba(0, 0, 0, 1)',
        color: '#faa33e'
    },
    buttonDouble:{
        width: Dimensions.get('window').width / 4 *2,
    },
    buttonTriplo: {
        width: Dimensions.get('window').width / 4 * 3,
    }
})
export default props => {
    const stylesButton =[styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriplo)
    if(props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress ={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}