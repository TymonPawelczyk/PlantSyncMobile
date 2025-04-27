import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PlantDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Ionicons name="leaf" size={18} color="#D8D7D4" />
        Plant Details
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    margin: 5,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  text: {
    color: "#D8D7D4",
    fontSize: 24,
  },
});
