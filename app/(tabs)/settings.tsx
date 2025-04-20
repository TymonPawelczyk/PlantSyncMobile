import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedScrollView } from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Settings() {
  return (
    <SafeAreaProvider>
      <ThemedSafeAreaView>
        <View>
          <StatusBar style="auto" animated />
        </View>
        <ThemedScrollView>
          <ThemedText style={styles.text}>Settings</ThemedText>
        </ThemedScrollView>
      </ThemedSafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    padding: 12,
    textAlign: "center",
  },
  statusBarContainer: {
    borderColor: "#343a40",
    borderBottomWidth: 0.2,
  },
});
