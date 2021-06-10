import React from "react";

import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 160,
    backgroundColor: "#460B74",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
});

export function Header() {
  return (
    <View style={styles.header}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#fff",
          marginTop: 80,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        KID'sPlay
      </Text>
    </View>
  );
}
