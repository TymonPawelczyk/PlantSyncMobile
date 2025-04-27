import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router"; // Import Stack
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ThemedScrollView } from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";

export default function PlantDetails() {
  const navigation = useNavigation();
  return (
    <>
      <Stack.Screen
        options={{
          title: "Plant Details",
          headerStyle: {
            
          },
          headerLeft: () => {
            return (
              <Ionicons
                name="arrow-back"
                size={24}
                color="auto"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            );
          },
        }}
      />
      <ThemedScrollView>
        <View style={styles.container}>
          <ThemedText style={styles.title}>Plant Details</ThemedText>
          <ThemedText>Details about the plant will go here.</ThemedText>
        </View>
      </ThemedScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
