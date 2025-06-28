import React from "react";
import { StyleSheet, ViewStyle, Pressable, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";

import DeletePlantComponent from "./DeletePlantComponent";

interface PlantComponentItems {
  id: string | number;
  name: string;
  species?: string;
  imageUrl?: string;
  lastWatered?: string; // Kept for data consistency, but not displayed
  onPress?: (id: string | number) => void;
}

export type ThemedPlantComponentProps = {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};

const PlantComponent: React.FC<
  PlantComponentItems & ThemedPlantComponentProps
> = ({
  id,
  name,
  species,
  imageUrl,
  onPress,
  style,
  contentContainerStyle,
}) => {
  const colorScheme = useColorScheme();
  const colors = {
    background: colorScheme === "dark" ? "#1c1c1e" : "#f2f2f7",
    text: colorScheme === "dark" ? "#ffffff" : "#000000",
    subtleText: colorScheme === "dark" ? "#8e8e93" : "#6c6c70",
    buttonBackground: colorScheme === "dark" ? "#2c2c2e" : "#e5e5ea",
    buttonText: colorScheme === "dark" ? "#ffffff" : "#000000",
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors.background },
        style,
        pressed && styles.containerPressed,
      ]}
      onPress={() => onPress?.(id)}
    >
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.image, styles.imagePlaceholder]}>
            <Ionicons name="leaf-outline" size={60} color={colors.subtleText} />
          </View>
        )}
      </View>

      <View style={[styles.detailsContainer, contentContainerStyle]}>
        <ThemedText style={{ ...styles.nameText, color: colors.text }}>
          {name}
        </ThemedText>

        {species && (
          <ThemedText style={{ ...styles.speciesText, color: colors.subtleText }}>
            {species}
          </ThemedText>
        )}
      </View>

      <Pressable
        style={[styles.button, { backgroundColor: colors.buttonBackground }]}
        onPress={() => onPress?.(id)}
      >
        <ThemedText style={{ ...styles.speciesText, color: colors.subtleText }}>
            {species}
          </ThemedText>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    margin: 8,
  },
  containerPressed: {
    opacity: 0.8, // Visual feedback when pressed
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  imagePlaceholder: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 30,
    color: "#000",
  },
  detailsContainer: {
    flex: 4,
    justifyContent: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  detailsText: {
    fontSize: 12,
    color: "#555",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
  },
  edit: {
    fontSize: 12,
    fontWeight: "300",
  },
});

export default PlantComponent;
