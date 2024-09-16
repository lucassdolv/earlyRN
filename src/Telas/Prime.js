import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function () {
  return (
    <>
    <View style={estilos.topo}>
      <Text style={estilos.titleTopo}>Prime</Text>
    </View>

    <View style={estilos.listaDescricao}>
      <Text style={estilos.nomeLista}>Lista de compra!</Text>
    </View>

    <View>
      <Text style={estilos.descricao}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>

      <Text style={estilos.preco}>
        R$40,00
      </Text>
      <Button style={estilos.botao} title="Comprar" onPress={() => alert('Direcionando ao carrinho!')} />
    </View>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "lightgreen"
  },
  titleTopo: {
    width: "100%",
    textAlign: "center", 
    paddingTop: 70,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  listaDescricao: {
    paddingTop: 20,
    fontSize: 15,
    marginLeft: 20
  },
  nomeLista: {
    fontWeight: "bold",
  },
  descricao: {
    color: "lightgreen",
    marginLeft: 20,
    paddingTop: 10,
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 20,
    paddingTop: 10,
    fontSize: 20,
    lineHeight: 26
  },
  botao: {
    width: "20%",
    textAlign: "center", 
    paddingTop: 10,
    fontSize: 20,
    backgroundColor: "lightgreen",
    color: "white",
    fontWeight: "bold"
  }
})