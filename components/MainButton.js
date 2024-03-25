import {View, Text, Pressable, StyleSheet} from 'react-native'

function MainButton ({children}) {
    function dummy () {
        return console.log(1);
    }
    return( <View style={styles.buttonOuterContainer}>
    <Pressable style={({pressed})=> pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer} onPress={dummy} android_ripple={{color: '#640233'}}>
    
        <Text style={styles.buttonText}>
            {children}
        </Text>
  
    </Pressable>
    </View>
    )
}

export default MainButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 20},
        shadowRadius: 6,
        shadowOpacity: 0.04,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
})