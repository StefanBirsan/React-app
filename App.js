import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WeatherCard from "./weathercard";
import ThirdScreen from "./thirdscreen";


const Tab = createMaterialTopTabNavigator();

function CustomButton() {
    return (
        <TouchableOpacity
            style={styles.customButtonContainer}
            onPress={() => Alert.alert('Mi scarba de tine', 'Fuck off mate.')}
        >
            <Text style={styles.customButtonText}>Ce ai cu button-u meu bah?</Text>
        </TouchableOpacity>
    );
}


const HomeScreen = ({ navigation }) => {

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#070708', '#c37d08', '#070209']}
            style={styles.container}
        >
            <Text style={styles.textStyle}>
                {"Welcome to my shitty app\nMobile Applications Workshop"}
            </Text>

            <TextInput
                placeholder={"Type something here..."}
                onChange={() => console.log("Some functionality here")}
                style={styles.textInputStyle}
            />

            <Image
                source={require("./assets/pozik.jpg")}
                style={styles.imageStyle}
            />

            <CustomButton />

            <TouchableOpacity
                style={styles.customButtonContainer}
                onPress={() => navigation.navigate('Second')}
            >
                <Text style={styles.customButtonText}>Go to Next Screen</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </LinearGradient>
    );
};

const SecondScreen = ({ navigation }) => {

    const weatherData = {
        day: 'Saturday, 14/10',
        temperature: 24,
        city: 'Timisoara',
        imageUrl: 'image.png',
    };

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#070708', '#c37d08', '#070209']}
            style={styles.container}
        >
            <Text style={styles.textStyle}>
                {"This is the Second Screen"}
            </Text>

            <WeatherCard {...weatherData} />

            <TouchableOpacity
                style={styles.customButtonContainer}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.customButtonText}>Go to First Screen</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBar={() => null}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Second" component={SecondScreen} />
                <Tab.Screen name="Third" component={ThirdScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textStyle: {
        fontStyle: "italic",
        fontSize: 22,
        color: "#fff",
        textAlign: "center",
    },
    textInputStyle: {
        backgroundColor: "#fb891b",
        padding: 10,
        borderRadius: 10,
        width: 200,
        color: "#FFFFDD",
        borderColor: "#000",
        borderWidth: 3,
        borderStyle: "solid",
        marginTop: 20,
        fontSize: 15,
    },
    imageStyle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#000",
    },
    customButtonContainer: {
        backgroundColor: "#fb891b",
        borderRadius: 20,
        padding: 15,
        width: 200,
        alignItems: 'center',
    },
    customButtonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    widgetContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    widgetText: {
        fontSize: 18,
        color: '#000',
    },
});
