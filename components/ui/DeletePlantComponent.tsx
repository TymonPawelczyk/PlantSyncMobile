import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DeletePlantComponent() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? "#343a40" : "#25292e" },
      ]}
      onPress={() => {
        console.log("Delete Plant Pressed");
      }}
    >
      <Text style={{ color: "#D8D7D4", fontSize: 24 }}>
        <Ionicons name="trash" size={24} color="#D8D7D4" />
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    margin: 5,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  text: {
    color: "#D8D7D4",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    color: "#D8D7D4",
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    backgroundColor: "#343a40",
    borderRadius: 6,
    padding: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconPressed: {
    backgroundColor: "#495057",
    borderRadius: 6,
    padding: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});