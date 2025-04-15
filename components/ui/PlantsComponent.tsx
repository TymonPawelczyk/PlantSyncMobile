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

  return (
    <Pressable
    style={({ pressed }) => [styles.container, { backgroundColor: colors.background },, pressed && styles.containerPressed]}
      onPress={() => onPress?.(id)}
    >
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <ThemedText style={styles.placeholderText}>🪴</ThemedText>
        </View>
      )}

      <View style={[styles.detailsContainer, contentContainerStyle]}>
        <ThemedText style={styles.title}>
          {name}
        </ThemedText>

        {species && (
          <ThemedText style={styles.description}>
            Species: {species}
          </ThemedText>
        )}

        {lastWatered && (
          <ThemedText style={styles.description}>
            Last Watered: {lastWatered}
          </ThemedText>
        )}
      </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 16,
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