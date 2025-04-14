import React from 'react';
import {RefreshControl ,StyleSheet, View} from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedText } from '@/components/ThemedText';
import PlantComponent from '@/components/ui/PlantsComponent';

export default function PlantsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
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
        <PlantComponent />
        <PlantComponent />
        <PlantComponent />
        <ThemedText style={styles.text}>
          Vegetables
        </ThemedText>
        <PlantComponent />
        <PlantComponent />
        <PlantComponent />
        <PlantComponent />
        <PlantComponent />
        <PlantComponent />

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