import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    marginTop: 80,
  },

  footerText: {
    color: "#676A68",
  },
});

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        KID'sPlay - Sistema de Gestão v0.0.1
      </Text>
    </View>
  );
}
