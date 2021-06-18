import React from "react";

import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export function Home() {
  return (
    <View style={styles.content}>
      <Text>Aqui é minha home</Text>
    </View>
  );
}
