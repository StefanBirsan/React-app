import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";



export default function App() {
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
          onChange={()=>console.log("Some functionality here")}
          style={styles.textInputStyle}
      />

      {/*<Image source={{uri:"link.com"}}/>*/}
      <Image
          source={require("./assets/pozik.jpg")}
          style={styles.imageStyle}

      />

      <Button
          title={"Ce ai cu button-u meu bah?"}
          color="red"
          onPress={() => Alert.alert("Mi scarba de tine", "Fuck off mate.")}

          style={styles.buttonsmek}
      />
          <CustomButton />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textStyle:{
    fontStyle:"italic",
    fontSize:22,
    color:"#070708",
    textAlign:"center",
  },
  textInputStyle:{
    backgroundColor:"#b691ed",
    padding:10,
    borderRadius:10,
    width:200,
    color:"#FFFFDD",
    borderColor:"#000",
    borderWidth:3,
    borderStyle:"solid",
    marginTop: 20,
  },
  imageStyle:{
    height:200,
    width:200,
    borderRadius:100,
    borderWidth:3,
    borderColor:"#000",
  },
  buttonsmek:{

  },
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
