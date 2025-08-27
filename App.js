import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => setContador(contador + 1);
  const handleDecrement = () => contador > 0 && setContador(contador - 1);
  const handleReset = () => setContador(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧮 Contador</Text>

      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{contador}</Text>
      </View>

      <View style={styles.rowButtons}>
        <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={handleIncrement}>
          <Text style={styles.buttonText}>➕ Aumentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.redButton]} onPress={handleDecrement}>
          <Text style={styles.buttonText}>➖ Diminuir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.yellowButton, styles.resetButton]} onPress={handleReset}>
        <Text style={styles.buttonText}>🟡 Zerar</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1b2a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#e0e1dd",
    marginBottom: 60,
    fontFamily: "sans-serif",
  },
  counterBox: {
    backgroundColor: "rgba(29, 53, 87, 0.7)", // próximo ao fundo e transparente
    paddingVertical: 45,
    paddingHorizontal: 65,
    borderRadius: 40,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#415a77", // borda suave
  },
  counterText: {
    fontSize: 72,
    fontWeight: "800",
    color: "#fff",
    fontFamily: "sans-serif-light",
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 15,
    flexWrap: "wrap", // quebra linha se faltar espaço
  },
  button: {
    paddingVertical: 16, // ajustado para não escapar
    paddingHorizontal: 26,
    borderRadius: 22,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    minWidth: 130, // garante tamanho consistente
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  greenButton: {
    backgroundColor: "#2a9d8f",
  },
  redButton: {
    backgroundColor: "#e63946",
  },
  yellowButton: {
    backgroundColor: "#f4a261",
  },
  resetButton: {
    alignSelf: "center",
    marginTop: 10,
    minWidth: 200,
  },
});
