import React from 'react';
import {StyleSheet, Text, ScrollView,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function PlantsScreen() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="auto" backgroundColor="#000" />    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Plants screen
        </Text>
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
  
});