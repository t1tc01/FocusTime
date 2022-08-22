import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, TextInput, View, Dimensions, Button} from 'react-native';
import {RoundedButton} from '../components/RoundedButton'
import {colors} from '../utils/colors';

export const Focus = ({addSubject}) => {
    let [subject, setSubject] = useState(null);

    return(
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={(newSubject) => setSubject(subject = newSubject)}
            ></TextInput>
            <View style={styles.roundedButton}>
                <Button
                    title="Press me"
                    onPress={() => addSubject(subject)}
                >
                </Button>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
    },
    text: {
        color: 'red',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    roundedButton: { 
        justifyContent: 'center',
        //paddingLeft: (Dimensions.get('screen').width / 2),
    }
})