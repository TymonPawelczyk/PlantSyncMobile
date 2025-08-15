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
  },
  {
    id: 2,
    name: "Snake Plant",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
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
              <View style={styles.plantItemsContainer}>
                {myPlantsData.map((item) => (
                  <PlantComponent
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    onPress={(id) => {
                      console.log("Pressed plant with id:", id);
                      gotoPlantDetails();
                    }}
                  />
                ))}
              </View>
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
    marginBottom: 10,
  },
  plantItemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
