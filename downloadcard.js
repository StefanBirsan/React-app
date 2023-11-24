// DownloadCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const DownloadCard = ({ title }) => {
    // Placeholder image URL
    const imageUrl = require('./assets/Down.png');

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Resume - Mihai Pop</Text>
                    <Text style={styles.secondaryText}>PDF File</Text>
                    <Text style={styles.thirdText}>23.59Kb</Text>
                </View>
                <Image source={imageUrl} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        margin: 8,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginLeft: 10,
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the start (left)
        marginRight: 10, // Add this line
    },
    title: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        marginRight: 60,
        marginLeft: 10,

    },
    secondaryText: {
        fontSize: 14,
        color: 'green',
        marginLeft: 10,
    },
    thirdText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
        marginTop: 10,
    },
    image: {
        width: 75,
        height: 75,
        marginTop: 10,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,

    },
});

export default DownloadCard;