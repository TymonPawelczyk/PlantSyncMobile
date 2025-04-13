import React from 'react';
import {View,  StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';


export default function PlantComponent()  {
  return (
      <View>
        <ThemedText style={styles.text} >Plant item</ThemedText>
      </View>
    );
  }


const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  }
});