// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    const [showInitialPage, setShowInitialPage] = useState(true);

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

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#884fcc', '#3fcffb', '#af1ddd']}
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

            {/* Use navigation.navigate instead of setShowInitialPage */}
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
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#884fcc', '#3fcffb', '#af1ddd']}
            style={styles.container}
        >

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
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent', // Make the header background transparent
                    },
                    headerTintColor: '#000', // Change the text color of the header
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Second" component={SecondScreen} />
            </Stack.Navigator>
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
        color: "#070708",
        textAlign: "center",
    },
    textInputStyle: {
        backgroundColor: "#b691ed",
        padding: 10,
        borderRadius: 10,
        width: 200,
        color: "#FFFFDD",
        borderColor: "#000",
        borderWidth: 3,
        borderStyle: "solid",
        marginTop: 20,
    },
    imageStyle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#000",
    },
    buttonsmek: {},
    customButtonContainer: {
        backgroundColor: 'blue', // Change the button color here
        borderRadius: 20,
        padding: 15,
        width: 200,
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20, // Change the font size here
        fontWeight: 'bold',
        // Change the font family here
    },
});
