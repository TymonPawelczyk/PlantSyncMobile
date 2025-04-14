import React from 'react';
import {View,  StyleSheet, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';


export default function PlantComponent() {
  return (
      <View style={styles.view}>
        <Pressable>
          <ThemedText style={styles.text} >Plant item</ThemedText>
        </Pressable>
      </View>
    );
  }


const styles = StyleSheet.create({
  view:{
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 14,
    borderColor: '#fff',
    borderBottomWidth: 0.2,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  text: {
    color: '#343a40',
    fontSize: 12,
  }
});