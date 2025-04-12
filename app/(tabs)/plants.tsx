import React from 'react';
import {RefreshControl ,StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedText } from '@/components/ThemedText';

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
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="auto"/>    
      <ThemedScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
        <ThemedText style={styles.text}>
          Fruits
            </ThemedText>
          {['Apple', 'Banana', 'Cherry', 'Pineapple', 'Watermelon', 'Melon'].map((fruit, index) => (
            <ThemedText key={index} style={styles.items}>
              "{fruit}"
              <ThemedText style={styles.description}> "Description"</ThemedText>
            </ThemedText>
        ))}
        <ThemedText style={styles.text}>
          Vegetables
            </ThemedText>
          {['Carrot', 'Potato', 'Tomato', 'Salad' ].map((vegetable, index) => (
            <ThemedText key={index} style={styles.items}>
              "{vegetable}"
              <ThemedText style={styles.description}> "Description"</ThemedText>
            </ThemedText>
            
        ))}
      </ThemedScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    padding: 12,
  },
  items: {
    fontSize: 18,
    padding: 26,
    marginVertical: 6,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: '#161a1d',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#1b4332',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  description: {
    fontSize: 13,
    padding: 6,
    marginVertical: 6,
    marginHorizontal: 16,
  }
});