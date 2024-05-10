import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const CalcCombustivelScreen = ({ navigation }) => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');

  function calc() {
    // Verifica se alcool e gasolina são números válidos
    if (!isNaN(alcool) && !isNaN(gasolina)) {
      const calculo = parseFloat(alcool) / parseFloat(gasolina);
      console.log(calculo);
      if (calculo < 0.7) {
        alert('Compensa usar o Álcool!');
      } else {
        alert('Compensa usar o Gasolina!');
      }
    } else {
      alert('Preencha os dados corretamente!');
      setAlcool('');
      setGasolina('');
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={require('../img/bomba.png')}/>
      
      <Text style={styles.title}>Tela de Cálculo de Combustível</Text>
      
      <Text style={styles.label}>Digite o valor do Álcool por litro</Text>
      <TextInput
        style={styles.input}
        placeholder="R$"
        keyboardType="numeric"
        onChangeText={text => setAlcool(text)}
        value={alcool}
      />
      
      <Text style={styles.label}>Digite o valor da Gasolina por litro</Text>
      <TextInput
        style={styles.input}
        placeholder="R$"
        keyboardType="numeric"
        onChangeText={text => setGasolina(text)}
        value={gasolina}
      />
      
      <Button
        title="Calcular"
        onPress={calc}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default CalcCombustivelScreen;
