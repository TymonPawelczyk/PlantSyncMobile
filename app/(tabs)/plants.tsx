import React from 'react';
import {RefreshControl ,StyleSheet, View, FlatList} from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedText } from '@/components/ThemedText';
import PlantComponent from '@/components/ui/PlantsComponent';

// Mock data 
const myPlantsData = [
  { id: 1, name: 'Swiss Cheese Plant', species: 'Monstera Deliciosa', imageUrl: 'https://example.com/monstera.jpg', lastWatered: 'Yesterday' },
  { id: 2, name: 'Snake Plant', species: 'Sansevieria Trifasciata', lastWatered: '3 days ago' }, // No image URL
  { id: 3, name: 'Fiddle Leaf Fig', imageUrl: 'https://example.com/fiddle.jpg' }, // No species/lastWatered
];

export default function PlantsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handlePlantPress = (plantId: string | number) => {
    console.log(`Plant pressed: ${plantId}`);
    // Navigate to detail screen, open modal, etc.
  };

  return (
    <SafeAreaProvider>
    <ThemedSafeAreaView>
        <View style={styles.statusBarContainer}>
            <StatusBar style="auto" animated/>
        </View>       
      <ThemedScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
        <ThemedText style={styles.text}>
          Fruits
        </ThemedText>
        <FlatList
        data={myPlantsData}
        renderItem={({ item }) => (
          <PlantComponent
            id={item.id}
            name={item.name}
            species={item.species}
            imageUrl={item.imageUrl}
            lastWatered={item.lastWatered}
            onPress={handlePlantPress} // Pass the handler function
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
        <ThemedText style={styles.text}>
          Vegetables
        </ThemedText>
        <FlatList
        data={myPlantsData}
        renderItem={({ item }) => (
          <PlantComponent
            id={item.id}
            name={item.name}
            species={item.species}
            imageUrl={item.imageUrl}
            lastWatered={item.lastWatered}
            onPress={handlePlantPress} // Pass the handler function
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </ThemedScrollView>
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
    borderColor: '#343a40',
    borderBottomWidth: 0.2,
  },
});