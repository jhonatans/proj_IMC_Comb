import React from 'react';
import { View, Text, Button } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tela de Cadastro</Text>
      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default CadastroScreen;
