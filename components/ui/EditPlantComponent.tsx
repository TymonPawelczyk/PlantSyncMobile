import React from "react";
import { StyleSheet, View, Text } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function EditPlantComponent() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#D8D7D4", fontSize: 24 }}>
        <Ionicons name="pencil" size={24} color="#D8D7D4" />
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
