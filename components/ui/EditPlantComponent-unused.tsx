import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function EditPlantComponent() {
  const router = useRouter();
  function gotoPlantDetails() {
    router.navigate("/view/plantDetails");
  }
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? "#343a40" : "#25292e" },
      ]}
      onPress={() => {
        gotoPlantDetails();
      }}
    >
      <Text style={{ color: "#D8D7D4", fontSize: 24 }}>
        <Ionicons name="pencil" size={18} color="#D8D7D4" />
      </Text>
    </Pressable>
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
});
