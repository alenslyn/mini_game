import {TextInput, View, StyleSheet} from 'react-native'
import MainButton from '../components/MainButton';

function StartGameScreen ( ) {
    return (
    <View style={styles.inputContainer}>
        <TextInput 
        maxLength={2} style={styles.numberInput} 
        keyboardType="number-pad"/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
        <MainButton>Reset</MainButton>
        </View>
        <View style={styles.buttonContainer}>
        <MainButton>Confirm</MainButton>
        </View>
        </View>
    </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
       alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b021f',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 20},
        shadowRadius: 6,
        shadowOpacity: 0.04,
     
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'},
        buttonContainer: {
            flex: 1,
        }

})