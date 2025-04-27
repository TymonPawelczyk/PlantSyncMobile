import React from "react";
import { RefreshControl, StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import PlantComponent from "@/components/ui/PlantsComponent";

const myPlantsData = [
  {
    id: 1,
    name: "Swiss Cheese Plant",
    species: "Monstera Deliciosa",
    lastWatered: "Yesterday",
  },
  {
    id: 2,
    name: "Snake Plant",
    lastWatered: "3 days ago",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    species: "Ficus Lyrata",
    lastWatered: "Last week",
    imageUrl:
      "https://www.thesill.com/cdn/shop/files/the-sill_Fiddle-Leaf-Fig-Tree_Large_Pallas_Cream_Variant_8735f6bb-bb33-4d96-9858-13dc076566d8.jpg?v=1744404801&width=1946",
  },
];

export default function PlantsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const router = useRouter();
  function gotoPlantDetails() {
    router.navigate("/view/plantDetails");
  }

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
                  onPress={(id) => {
                    console.log("Pressed plant with id:", id);
                    gotoPlantDetails();
                  }}
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
