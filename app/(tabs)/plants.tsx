import React from 'react';
import {RefreshControl ,StyleSheet, Text, ScrollView,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

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
      <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
        <Text style={styles.text}>
          Fruits
            </Text>
          {['Apple', 'Banana', 'Cherry', 'Pineapple', 'Watermelon', 'Melon'].map((fruit, index) => (
            <Text key={index} style={styles.items}>
              "{fruit}"
              <Text style={styles.description}> "Description"</Text>
            </Text>
        ))}
        <Text style={styles.text}>
          Vegetables
            </Text>
          {['Carrot', 'Potato', 'Tomato', 'Salad' ].map((vegetable, index) => (
            <Text key={index} style={styles.items}>
              "{vegetable}"
              <Text style={styles.description}> "Description"</Text>
            </Text>
            
        ))}
      </ScrollView>
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