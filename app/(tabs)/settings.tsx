import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedScrollView } from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Settings() {
  const [allowNotifications, setAllowNotifications] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("allowNotifications").then((value) => {
      if (value !== null) {
        setAllowNotifications(JSON.parse(value));
      }
    });
  }, []);

  const handleToggle = async (value: boolean) => {
    if (value) {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        setAllowNotifications(false);
        return;
      }
    }
    setAllowNotifications(value);
    await AsyncStorage.setItem("allowNotifications", JSON.stringify(value));
  };

  return (
    <SafeAreaProvider>
      <ThemedSafeAreaView>
        <View style={styles.statusBarContainer}>
          <StatusBar style="auto" animated />
        </View>
        <ThemedScrollView>
          <ThemedText style={styles.text}>Settings</ThemedText>
          <View style={styles.row}>
            <ThemedText style={styles.label}>Enable Notifications</ThemedText>
            <Switch
              value={allowNotifications}
              onValueChange={handleToggle}
            />
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  label: {
    fontSize: 16,
  },
});
