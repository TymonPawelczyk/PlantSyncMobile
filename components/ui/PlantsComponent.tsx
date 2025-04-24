import React from "react";
import { StyleSheet, ViewStyle, Pressable, View, Image } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";

import EditPlantComponent from "./EditPlantComponent";
import DeletePlantComponent from "./DeletePlantComponent";

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

const PlantComponent: React.FC<
  PlantComponentItems & ThemedPlantComponentProps
> = ({
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
    background: colorScheme === "dark" ? "#343a40" : "#edede9",
    text: colorScheme === "dark" ? "#D8D7D4" : "#212529",
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors.background },
        ,
        pressed && styles.containerPressed,
      ]}
      onPress={() => onPress?.(id)}
    >
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          {imageUrl === undefined && (
            <ThemedText style={styles.placeholderText}>?</ThemedText>
          )}
        </View>
      )}

      <View style={[styles.detailsContainer, contentContainerStyle]}>
        <ThemedText style={styles.title}>{name}</ThemedText>

        {species && (
          <ThemedText style={styles.description}>Species: {species}</ThemedText>
        )}

        {lastWatered && (
          <ThemedText style={styles.description}>
            Last Watered: {lastWatered}
          </ThemedText>
        )}
      </View>
      <EditPlantComponent/>
      <DeletePlantComponent/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
    flex: 3,
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
