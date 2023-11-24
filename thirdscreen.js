import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DownloadCard from "./downloadcard";

const ThirdScreen = () => {
    return (
        <LinearGradient
            colors={['#070708', '#c37d08', '#070209']}
            style={styles.container}>

            <Text style={styles.textS}> Smekerie </Text>
            <DownloadCard/>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    textS: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ThirdScreen;