import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0", // Color de fondo claro
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Para hacer la imagen circular
    marginBottom: 20, // Espaciado debajo de la imagen
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16, // Tamaño de texto mayor para el texto en negrita
  },
  text: {
    fontSize: 14, // Tamaño de texto normal
    marginVertical: 5, // Espaciado vertical entre líneas
  },
  button: {
    marginTop: 20, // Espacio encima del botón
    backgroundColor: "#007BFF", // Color de fondo del botón
    borderRadius: 5, // Bordes redondeados
    paddingVertical: 10, // Espaciado vertical dentro del botón
    paddingHorizontal: 20, // Espaciado horizontal dentro del botón
  },
  buttonText: {
    color: "#ffffff", // Color del texto del botón
    textAlign: "center", // Centrar el texto dentro del botón
    fontWeight: "bold", // Negrita para el texto del botón
  },
});

export default styles;
