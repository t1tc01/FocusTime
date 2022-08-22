import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export const FocusHistory = ({history}) => {

    if (!history || !history.length)  return  <Text style={styles.item}>We haven't focused anything yet</Text>;

    const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Thing's we focus on: </Text>
            <FlatList data={history} renderItem={renderItem}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    }, 
    item: {
        fontSize: 12,
        color: 'red',
    }
})