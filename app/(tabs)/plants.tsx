import React from "react";
import { RefreshControl, StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import PlantComponent from "@/components/ui/PlantsComponent";

const myPlantsData = [
  {
    id: 1,
    name: "Swiss Cheese Plant",
    species: "Monstera Deliciosa",
    imageUrl: "https://example.com/monstera.jpg",
    lastWatered: "Yesterday",
  },
  {
    id: 2,
    name: "Snake Plant",
    species: "Sansevieria Trifasciata",
    lastWatered: "3 days ago",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    imageUrl: "https://example.com/fiddle.jpg",
  },
];

export default function PlantsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const handlePlantPress = (plantId: any) => {
    console.log(`Plant pressed: ${plantId}`);
  };

  return (
    <SafeAreaProvider>
      <ThemedSafeAreaView>
        <View style={styles.statusBarContainer}>
          <StatusBar style="auto" animated />
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {["Fruits", "Vegetables", "Spices"].map((title) => (
            <View key={title} style={styles.listContainer}>
              <ThemedText style={styles.text}>{title}</ThemedText>
              {myPlantsData.map((item) => (
                <PlantComponent
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  species={item.species}
                  imageUrl={item.imageUrl}
                  lastWatered={item.lastWatered}
                  onPress={(id) => handlePlantPress(id)}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </ThemedSafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 4,
    marginHorizontal: 14,
    fontSize: 32,
    padding: 12,
  },
  statusBarContainer: {
    borderColor: "#343a40",
    borderBottomWidth: 0.2,
  },
  listContainer: {
    marginBottom: 20,
  },
});
