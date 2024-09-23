import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const TablaMultiplicar = () => {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const num = parseInt(numero);
    if (!isNaN(num)) {
      const nuevaTabla = [];
      for (let i = 1; i <= 13; i++) {
        nuevaTabla.push(`${num} x ${i} = ${num * i}`);
      }
      setTabla(nuevaTabla);
    } else {
      setTabla([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Multiplicar</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Generar Tabla" onPress={generarTabla} color="#FF6F61" />
      <ScrollView style={styles.resultContainer}>
        {tabla.map((item, index) => (
          <Text key={index} style={styles.result}>
            {item}
          </Text>
        ))}
      </ScrollView>
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
    backgroundColor: "#ffffff",
  },
  resultContainer: {
    marginTop: 20,
    width: "100%",
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    color: "#4CAF50",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TablaMultiplicar;
