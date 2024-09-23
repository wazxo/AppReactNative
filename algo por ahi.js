const ProfileScreen = () => {
  // Estados para el traductor de números a letras
  const [numero, setNumero] = useState("");
  const [textoEnLetras, setTextoEnLetras] = useState("");

  // Función para convertir un número en letras
  const numeroALetras = (num) => {
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
      "diez",
      "once",
      "doce",
      "trece",
      "catorce",
      "quince",
      "dieciséis",
      "diecisiete",
      "dieciocho",
      "diecinueve",
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
      "cien",
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

    let letras = "";

    // Centenas
    let centenasIndex = Math.floor(num / 100);
    if (centenasIndex > 0) {
      letras += centenas[centenasIndex] + (num % 100 === 0 ? "" : " ");
    }

    // Decenas
    let decenasIndex = Math.floor((num % 100) / 10);
    let unidadesIndex = num % 10;

    if (num % 100 >= 10 && num % 100 < 20) {
      letras += unidades[num % 100];
    } else {
      letras += decenas[decenasIndex];
      if (unidadesIndex > 0)
        letras += (decenasIndex ? " y " : "") + unidades[unidadesIndex];
    }

    return letras.trim();
  };

  // Función para manejar la conversión del número a letras
  const convertirNumero = () => {
    const num = parseInt(numero);
    if (num >= 1 && num <= 1000) {
      const resultado = numeroALetras(num);
      setTextoEnLetras(resultado);
    } else {
      setTextoEnLetras("Introduce un número entre 1 y 1000.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Información del perfil */}

      {/* Sumadora */}
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

        <Button title="Sumar" onPress={sumar} />

        {resultado !== null && (
          <Text style={styles.result}>Resultado: {resultado}</Text>
        )}
      </View>

      {/* Traductor de Números a Letras */}
      <View style={styles.traductorContainer}>
        <Text style={styles.title}>Traductor de Números a Letras</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingresa un número del 1 al 1000"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />

        <Button title="Convertir" onPress={convertirNumero} />

        {textoEnLetras ? (
          <Text style={styles.result}>En letras: {textoEnLetras}</Text>
        ) : null}
      </View>
    </View>
  );
};
export default ProfileScreen;
