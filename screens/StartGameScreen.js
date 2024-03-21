import {TextInput, View} from 'react-native'
import MainButton from '../components/MainButton';

function StartGameScreen ( ) {
    return (
    <View>
        <TextInput />
        <MainButton>Reset</MainButton>
        <MainButton>Confirm</MainButton>
    </View>
    )
}

export default StartGameScreen;