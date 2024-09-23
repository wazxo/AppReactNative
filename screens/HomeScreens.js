import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ProfileScreen = () => {
  const name = "Johelin Pascual Perez Valdez";
  const matricula = "2022-1131";
  const email = "20221131@itla.edu.do";

  return (
    <View style={styles.container}>
      <Image source={require("../assets/foto2x2.jpg")} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>
        <Text style={styles.boldText}>Matrícula: </Text>
        {matricula}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.boldText}>Correo: </Text>
        {email}
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F8FF",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 135,
    borderWidth: 3,
    borderColor: "#FF6F61",
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF6F61",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "#4CAF50",
  },
});
