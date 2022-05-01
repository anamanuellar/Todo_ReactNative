import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default TaskItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 100,
    },
    indexContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
    },
    index: {
        color: '#000',
        fontSize: 12,
    },
    taskContainer: {
        backgroundColor: '#fff',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 50,
        paddingVertical: 5,
        
    },
    task: {
        color: '#000',
        width: 100,
        fontSize: 12,
    },
    delete: {
        marginLeft: 2,
    },
});