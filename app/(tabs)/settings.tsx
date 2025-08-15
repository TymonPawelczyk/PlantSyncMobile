import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedScrollView } from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@/hooks/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Switch } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  return (
    <SafeAreaProvider>
      <ThemedSafeAreaView>
        <View style={styles.statusBarContainer}>
          <StatusBar style="auto" animated />
        </View>
        <ThemedScrollView>
          <ThemedText style={styles.text}>Settings</ThemedText>
          <View style={styles.themeRow}>
            <ThemedText>Dark Mode</ThemedText>
            <Switch value={theme === "dark"} onValueChange={toggleTheme} />
          </View>
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
  },
  statusBarContainer: {
    borderColor: "#343a40",
    borderBottomWidth: 0.2,
  },
  themeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
});

