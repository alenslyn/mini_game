import {View, Text} from 'react-native'

function MainButton ({children}) {
    return <View>
        <Text>
            {children}
        </Text>
    </View>
}

export default MainButton;