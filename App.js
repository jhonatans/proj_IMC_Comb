import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './screen/LoginScreen';
import CadastroScreen from './screen/CadastroScreen';
import HomeScreen from './screen/HomeScreen';
import CalcCombustivelScreen from './screen/CalcCombustivelScreen';
import CalcIMCScreen from './screen/CalcIMCScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CalcCombustivel" component={CalcCombustivelScreen} />
        <Stack.Screen name="CalcIMC" component={CalcIMCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;









// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

// export default function App() {
//   const [alcool, setAlcool] = useState('');
//   const [gasolina, setGasolina] = useState('');

//   function calc() {
//     // Verifica se alcool e gasolina são números válidos
//     if (!isNaN(alcool) && !isNaN(gasolina)) {
//       const calculo = parseFloat(alcool) / parseFloat(gasolina);
//       console.log(calculo);
//       if (calculo < 0.7) {
//         Alert.alert('Compensa usar o Álcool!');
//       } else {
//         Alert.alert('Compensa usar o Gasolina!');
//       }
//     } else {
//       Alert.alert('Preencha os dados corretamente!');
//         setAlcool('');
//         setGasolina('');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.stretch}
//         source={require('./img/bomba.png')}
//       />
      
//       <Text style={styles.container2}>Qual a melhor opção?</Text>
      
//       <Text style={styles.container2}>Digite o valor do Álcool por litro</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="R$"
//         keyboardType="numeric"
//         onChangeText={text => setAlcool(text)}
//         value={alcool}
//       />
      
//       <Text style={styles.container2}>Digite o valor da Gasolina por litro</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="R$"
//         keyboardType="numeric"
//         onChangeText={text => setGasolina(text)}
//         value={gasolina}
//       />
      
//       <Button
//         width='100'
//         title="Calcular"
//         onPress={calc}
//       />
      
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
//   container2: {
//     color: '#fff',
//   },
 
//   stretch: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
  
//   input: {
//     backgroundColor: '#fff',
//     height: 50,
//     width: 300,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
