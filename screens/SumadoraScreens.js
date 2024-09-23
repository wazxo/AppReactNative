import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Sumadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  // Función para sumar
  const sumar = () => {
    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(suma);
  };

  return (
    <View style={styles.sumadoraContainer}>
      <Text style={styles.title}>Sumadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa el primer número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresa el segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Button title="Sumar" onPress={sumar} color="#FF6F61" />

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
};

export default Sumadora;

const styles = StyleSheet.create({
  sumadoraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F8FF", // Fondo suave
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF6F61",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    borderWidth: 2,
    borderColor: "#FF6F61", // Color del borde
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF", // Fondo blanco
    fontSize: 18,
    color: "#333333",
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50", // Color verde para el resultado
  },
});
