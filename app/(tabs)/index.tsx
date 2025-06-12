import React from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { ThemedScrollView } from "@/components/ThemedScrollView";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";

import * as Location from "expo-location";

export default function Index() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [location, setLocation] = React.useState<Location.LocationObjectCoords | null>(null);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [weather, setWeather] = React.useState<string | null>(null);
  const [weatherError, setWeatherError] = React.useState<string | null>(null);

  const getWeather = React.useCallback(
    async (coords: Location.LocationObjectCoords) => {
      try {
        const url =
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m&timezone=auto`;
        const res = await fetch(url);
        const data = await res.json();
        const temp = data?.current?.temperature_2m;
        if (typeof temp === "number") {
          setWeather(`${temp}°C`);
          setWeatherError(null);
        } else {
          setWeather(null);
          setWeatherError("No weather data");
        }
      } catch (e) {
        console.error(e);
        setWeather(null);
        setWeatherError("Failed to get weather");
      }
    },
    []
  );

  const getLocation = React.useCallback(async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission denied");
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      setErrorMsg(null);
    } catch (e) {
      console.error(e);
      setErrorMsg("Failed to get location");
    }
  }, []);

  React.useEffect(() => {
    getLocation();
  }, [getLocation]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getLocation().finally(() => setRefreshing(false));
  }, [getLocation]);
  const locationText = location
    ? `Lat: ${location.latitude.toFixed(3)}, Lon: ${location.longitude.toFixed(
        3
      )}`
    : errorMsg ?? "Getting location...";

  return (
    <SafeAreaProvider>
      <ThemedSafeAreaView>
        <View style={styles.statusBarContainer}>
          <StatusBar style="auto" animated />
        </View>
        <ThemedScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <ThemedText style={styles.title}>Home screen</ThemedText>
          <ThemedText style={styles.text}>Location: {locationText}</ThemedText>
        </ThemedScrollView>
      </ThemedSafeAreaView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    padding: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
    padding: 12,
  },
  statusBarContainer: {
    borderColor: "#343a40",
    borderBottomWidth: 0.2,
  },
});
