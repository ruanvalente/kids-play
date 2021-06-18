import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { Button } from "./src/components/Button";
import { Footer } from "./src/components/Footer";
import { Header } from "./src/components/Header";
import { Home } from "./src/Screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Vamos começar a brincadeira ?</Text>

        <View>
          <Image
            width={350}
            height={350}
            source={require("./assets/children_background.png")}
          />
        </View>
        <Button />
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#828684",
  },
});
