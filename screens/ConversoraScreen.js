import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Traductor = () => {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const convertirANumero = (num) => {
    const unidades = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];
    const decenas = [
      "",
      "diez",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ];
    const centenas = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];

    if (num === 1000) return "mil";
    if (num === 100) return "cien";
    if (num < 10) return unidades[num];
    if (num < 100) {
      const d = Math.floor(num / 10);
      const u = num % 10;
      return decenas[d] + (u > 0 ? " y " + unidades[u] : "");
    }
    if (num < 1000) {
      const c = Math.floor(num / 100);
      const resto = num % 100;
      return centenas[c] + (resto > 0 ? " " + convertirANumero(resto) : "");
    }
    return "";
  };

  const traducir = () => {
    const num = parseInt(numero);
    if (num >= 1 && num <= 1000) {
      setResultado(convertirANumero(num));
    } else {
      setResultado("Ingrese un número del 1 al 1000");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traductor de Números a Letras</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un número (1-1000)"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Traducir" onPress={traducir} color="#FF6F61" />
      {resultado && <Text style={styles.result}>En letras: {resultado}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F8FF", // Fondo suave
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FF6F61", // Color vibrante para el título
  },
  input: {
    height: 50,
    borderColor: "#FF6F61", // Color del borde
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 8, // Bordes redondeados
    backgroundColor: "#ffffff", // Fondo blanco para el input
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50", // Color verde para el resultado
  },
});

export default Traductor;
