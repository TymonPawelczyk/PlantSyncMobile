import React from 'react';
import {StyleSheet, Text, ScrollView,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function PlantsScreen() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="auto"/>    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Fruits
            </Text>
          {['Apple', 'Banana', 'Cherry', 'Pinapple', 'Watermelon', 'Melon'].map((fruit, index) => (
            <Text key={index} style={styles.items}>
              {fruit}
              <Text> Description</Text>
            </Text>
        ))}
        <Text style={styles.text}>
          Vegetables
            </Text>
          {['Carrot', 'Potato', 'Tomato', 'Salad' ].map((vegetable, index) => (
            <Text key={index} style={styles.items}>
              {vegetable}
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
    backgroundColor: '#25292e',
  },
  scrollView: {
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
    fontSize: 42,
    padding: 12,
  },
  items: {
    color: '#fff',
    fontSize: 18,
    padding: 26,
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: '#2d3436',
    borderWidth: 2,
    borderColor: '#778da9',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#6c5ce7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  }
});