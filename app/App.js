import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import api from '../src/services/api';

export default function App() {
  const [cep, setCep] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput 
          style={styles.input}
          placeholder='Ex: 29149575'
          value={cep}
          onChangeText={(texto) => setCep(texto) }
          keyboardType='numeric'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
