import React from 'react';
import { StyleSheet, ViewStyle, Pressable, View, Image } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';

interface PlantComponentItems {
  id: string | number;
  name: string;
  species?: string;
  imageUrl?: string;
  lastWatered?: string;
  onPress?: (id: string | number) => void;
}

export type ThemedPlantComponentProps = {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};  

const PlantComponent: React.FC<PlantComponentItems & ThemedPlantComponentProps> = ({
  id,
  name,
  species,
  imageUrl,
  lastWatered,
  onPress,
  style,
  contentContainerStyle,
}) => {
  const colorScheme = useColorScheme();
    const colors = {
      background: colorScheme === 'dark' ? '#343a40' : '#edede9',
      text: colorScheme === 'dark' ? '#D8D7D4' : '#212529',
    };
    const { style, contentContainerStyle, ...otherProps } = props;

  return (
      <Pressable style={[styles.container, { backgroundColor: colors.background }, style]}{...otherProps}>
          <ThemedText style={styles.title}>Watermelon</ThemedText>
          <ThemedText style={styles.description}>Description</ThemedText>
          <ThemedText style={styles.edit}>Edit item</ThemedText>
      </Pressable>
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