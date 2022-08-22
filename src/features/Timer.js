import React, {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import {Countdown} from '../components/Countdown';
import {RoundedButton} from '../components/RoundedButton';
import {ProgressBar} from 'react-native-paper';
import {Timing} from '../features/Timing';
import KeepAwake, { useKeepAwake } from 'expo-keep-awake';

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {

    useKeepAwake();

    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];

    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);


    const onEnd = (reset) => {
        Vibration.vibrate(ONE_SECOND_IN_MS);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    };

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={onEnd}
                ></Countdown>
            </View>

            <View style={{paddingTop: 20, paddingBottom: 20, alignItems: 'center',justifyContent: 'center'}}>
                <Text style={styles.title}>Focusing on: </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={{paddingTop: 20, backgroundColor: 'pink'}}>
                <ProgressBar
                    progress={progress} 
                    color='red'
                    style={{height: 20}}
                />
            </View>
            <View  style={styles.timingWrapper}>
                <Timing onChangeTime={setMinutes} />
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && (<RoundedButton title={'start'} onPress={() => {setIsStarted(!isStarted);}}/>)}
                {isStarted && (<RoundedButton title={'stop'} onPress={() => {setIsStarted(!isStarted);}}/>)}
            </View>
            <View style={styles.clearSubjectWrapper}>
                <RoundedButton size={50} title='-' onPress={clearSubject} />
            </View>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ace2e3'
    },
    countdown: { 
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    timingWrapper: {
        flex: 0.1,
        flexDirection:'row',
        padding: 10,
    },
    buttonWrapper: { 
        flex: 0.3,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },
    clearSubjectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    task: {
        color: 'white',
        textAlign: 'center',
    }, 
})