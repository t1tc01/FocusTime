//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors} from './src/utils/colors';
import {Focus} from './src/features/Focus';
import {Timer} from './src//features/Timer';
import {FocusHistory} from './src/features/FocusHistory';

export default function App() {

  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  console.log(currentSubject);
  return (
    <View style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => {setCurrentSubject(null)}}
        />
        ) 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.backgroundColor,
  },
});
