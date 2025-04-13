import React from 'react';
import {View,  StyleSheet, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';


export default function PlantComponent() {
  return (
      <View>
        <Pressable>
          <ThemedText style={styles.text} >Plant item</ThemedText>
        </Pressable>
      </View>
    );
  }


const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  }
});