import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherCard = ({ day, temperature, city }) => {
    const imageUrl = require(`./assets/image.png`);
    return (
        <View style={styles.weatherCard}>
            <View style={styles.contentContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.dayText}>{day}</Text>
                    <View style={styles.imageContainer}>
                        <Image source={imageUrl} style={styles.weatherImage} />
                    </View>
                    <Text style={styles.temperatureText}>{temperature}° C</Text>
                    <Text style={styles.cityText}>{city}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherCard: {
        backgroundColor: '#191D73',
        padding: 40,
        width: 227,
        height: 306.52,
        borderRadius: 24,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    dayText: {
        fontSize: 12,
        color: 'white',
        marginBottom: -10,
        marginTop: 0,
        textAlign: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        flex: 2,
    },
    weatherImage: {
        width: 220,
        height: 220,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 10,
    },
    temperatureText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        marginTop: 50,
        flex: 1,

    },
    cityText: {
        fontSize: 12,
        color: 'white',
        marginBottom: -10,
        textAlign: 'center',
        marginTop: 0,


    },
});

export default WeatherCard;
