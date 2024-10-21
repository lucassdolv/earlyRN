import React, { useState, useEffect } from 'react'; 
// Importa os hooks useState e useEffect da biblioteca React
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function HooksTest() {
  const [nome, setNome] = useState('Anonimo');
  // Declara o estado 'nome' com o valor inicial 'Anonimo' e a função setNome para atualizá-lo
  const [nomeTemporario, setNomeTemporario] = useState('');
  // Declara o estado 'nomeTemporario' com o valor inicial vazio e a função setNomeTemporario para atualizá-lo
  useEffect(() => {
    // useEffect é executado após o render, sempre que o estado 'nome' for alterado
    console.log(`O nome foi alterado para: ${nome}`);
    // Exibe uma mensagem no console sempre que o nome for atualizado
  }, [nome]);
  // O array de dependências [nome] garante que o efeito seja executado apenas quando 'nome' mudar
  const handleEnviarNome = () => {
    // Função chamada ao pressionar o botão "Enviar Nome"
    setNome(nomeTemporario);
    // Atualiza o estado 'nome' com o valor de 'nomeTemporario'
  };
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, {nome}!</Text>
      <TextInput
        style={styles.input}
        value={nomeTemporario}
        onChangeText={setNomeTemporario}
        placeholder="Digite seu nome"
      />
      {/* Campo de texto para o usuário digitar o nome.
          - 'value' define o valor atual do input como 'nomeTemporario'
          - 'onChangeText' define a função que será chamada quando o texto mudar, atualizando 'nomeTemporario'
          - 'placeholder' é o texto exibido quando o campo está vazio
      */}

      <Button title="Enviar Nome" onPress={handleEnviarNome} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
});
