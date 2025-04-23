import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function EditPlantComponent() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#D8D7D4", fontSize: 24 }}>Edit</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 6,
  },
});