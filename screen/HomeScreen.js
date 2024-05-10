import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tela Inicial</Text>
      <Button
        title="Ir para Calculo Combustivel"
        onPress={() => navigation.navigate('CalcCombustivel')}
      />
      <Button
        title="Ir para Calculo IMC"
        onPress={() => navigation.navigate('CalcIMC')}
      />
    </View>
  );
}

export default HomeScreen;
