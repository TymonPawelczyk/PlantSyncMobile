import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlantDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
