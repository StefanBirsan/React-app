import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from "react";

export default function App() {
  const [valuez, setValuez] = useState([]);

  useEffect(() => {
    fetch('https://api.tronalddump.io/random/quote', {
        options: { method: 'GET' },
        headers: { 'Accept': 'application/json' }
    })
        .then(result => result.json())
        .then(result => {

            console.log(result)
            return result
        })
        .then(result => setValuez([result.value]))
  }, []);

  return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <Image source={{ uri: 'https://place.dog/200/200' }}
               width={200}
               height={200}
        />
        {valuez.map(f => <Text key={f}>{f}</Text>)}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
