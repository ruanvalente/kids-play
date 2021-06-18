import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: "#460B74",
    padding: 15,
    borderRadius: 50,
  },

  subtitleButton: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.subtitleButton}>Começar</Text>
    </TouchableOpacity>
  );
}
