import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router"; // Import Stack

export default function PlantDetails() {
  return (
    <>
      <Stack.Screen options={{ title: "Plant Details", headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Plant Details Screen</Text>
        <Text>
          This is where you can view and edit the details of your plant.
        </Text>
      </View>
    </>
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
