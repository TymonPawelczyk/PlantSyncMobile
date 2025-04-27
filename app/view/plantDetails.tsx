import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router"; // Import Stack
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useColorScheme } from "@/hooks/useColorScheme";

import { ThemedScrollView } from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";

export default function PlantDetails(plantId: string | number) {
  const navigation = useNavigation();
  const iconColors = useColorScheme() === "dark" ? "#D8D7D4" : "#212529";
  return (
    <>
      <Stack.Screen
        options={{
          title: `Plant Details`,
          headerTitle(props) {
            return (
              <ThemedText style={styles.title} {...props}>
                Plant Details
              </ThemedText>
            );
          },
          headerTitleStyle: {
            color: "auto",
          },
          headerStyle: {
            backgroundColor:
              useColorScheme() === "dark" ? "#212529" : "#D8D7D4",
          },
          headerLeft: () => {
            return (
              <Ionicons
                name="arrow-back"
                size={24}
                color={iconColors}
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
    fontSize: 18,
    fontWeight: "bold",
  },
});
