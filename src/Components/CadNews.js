import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, Alert } from "react-native";

export default function CadNews() {
  const [infoInitials, setInfos] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    telefone: "",
    cpf: ""
  });

  const handleInputChange = (field, value) => {
    setInfos({
      ...infoInitials, 
      [field]: value, 
    });
  };

  const handleSubmit = () => {
    if (!infoInitials.nome || !infoInitials.email || !infoInitials.senha || !infoInitials.idade || !infoInitials.telefone || !infoInitials.cpf) {
      Alert.alert("Por favor, preencha todos os campos");
      return;
    }

    console.log("Nome: ", infoInitials.nome);
    console.log("Email: ", infoInitials.email);
    console.log("Idade: ", infoInitials.idade);
    console.log("Telefone: ", infoInitials.telefone);
    console.log("CPF: ", infoInitials.cpf);
    console.log("Senha: ", infoInitials.senha);

    setInfos({ nome: "", email: "", senha: "", idade: "", telefone: "", cpf: "" });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Cadastro de Usuário</Text>
      <TextInput
        placeholder="Digite seu nome!"
        style={style.input}
        value={infoInitials.nome}
        onChangeText={(text) => handleInputChange("nome", text)}
      />
      <TextInput
        placeholder="Digite seu email!"
        style={style.input}
        value={infoInitials.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      <TextInput
        placeholder="Digite sua idade"
        style={style.input}
        keyboardType="numeric"
        value={infoInitials.idade}
        onChangeText={(text) => handleInputChange("idade", text)}
      />
      <TextInput
        placeholder="Digite seu telefone"
        style={style.input}
        keyboardType="phone-pad"
        value={infoInitials.telefone}
        onChangeText={(text) => handleInputChange("telefone", text)}
      />
      <TextInput
        placeholder="Digite seu CPF"
        style={style.input}
        keyboardType="numeric"
        value={infoInitials.cpf}
        onChangeText={(text) => handleInputChange("cpf", text)}
      />
      <TextInput
        placeholder="Digite sua senha"
        style={style.input}
        secureTextEntry={true}
        value={infoInitials.senha}
        onChangeText={(text) => handleInputChange("senha", text)}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Fundo vermelho
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10, // Borda arredondada
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
