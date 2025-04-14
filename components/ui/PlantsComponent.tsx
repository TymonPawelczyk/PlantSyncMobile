import React from 'react';
import { View, Pressable } from 'react-native';
import { StyleSheet, ViewStyle } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

import { ThemedText } from '@/components/ThemedText';

// Define props, extending ScrollViewProps
export type ThemedPlantComponentProps =  {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};  

export default function PlantComponent(props: ThemedPlantComponentProps) {
    const colorScheme = useColorScheme(); // Get system color scheme
    const colors = {
      background: colorScheme === 'dark' ? '#343a40' : '#edede9',
      text: colorScheme === 'dark' ? '#D8D7D4' : '#212529',
    };
    const { style, contentContainerStyle, ...otherProps } = props;

  return (
      <View style={[styles.container, { backgroundColor: colors.background }, style]}{...otherProps}>
        <Pressable>
          <ThemedText style={styles.title}>Arbuz</ThemedText>
          <ThemedText style={styles.description}>Description</ThemedText>
          <ThemedText style={styles.edit}>Edit item</ThemedText>
        </Pressable>
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
    height: 120,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 14,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
  },
  edit: {
    fontSize: 12,
    fontWeight: '300',
  },
});