import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

export function Form() {
  const [name, setName] = useState("");
  const [responsible, setResponsible] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [observations, setObservations] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.form}
    >
      <Text style={{ color: "#676A68", fontWeight: "bold", fontSize: 18 }}>
        Nome
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Ruan Valente"
        keyboardType="default"
        onChangeText={(name) => setName(name)}
      />

      <Text style={{ color: "#676A68", fontWeight: "bold", fontSize: 18 }}>
        Responsável
      </Text>
      <TextInput
        style={styles.input}
        value={responsible}
        placeholder="Lorena Torres"
        keyboardType="default"
        onChangeText={(responsible) => setResponsible(responsible)}
      />

      <View>
        <Text style={{ color: "#676A68", fontWeight: "bold", fontSize: 18 }}>
          Idade
        </Text>
        <TextInput
          style={styles.input}
          value={age}
          placeholder="5"
          keyboardType="numeric"
          onChangeText={(age) => setAge(age)}
        />

        <Text style={{ color: "#676A68", fontWeight: "bold", fontSize: 18 }}>
          Telefone
        </Text>
        <TextInput
          style={styles.input}
          value={phone}
          placeholder="(91) 9999-9999"
          keyboardType="phone-pad"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <Text style={{ color: "#676A68", fontWeight: "bold", fontSize: 18 }}>
        Observações
      </Text>
      <TextInput
        style={styles.textArea}
        value={observations}
        placeholder=""
        keyboardType="default"
        onChangeText={(observations) => setObservations(observations)}
      />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: 200,
            backgroundColor: "#460B74",
            padding: 15,
            borderRadius: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Começar
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  form: {
    flex: 1,
    marginTop: 40,
  },

  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#A995FA",
    marginVertical: 10,
  },

  textArea: {
    width: 300,
    height: 80,
    padding: 10,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#A995FA",
  },
});
