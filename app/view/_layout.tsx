import { Stack } from "expo-router";
import React from "react";

export default function ViewLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="plantDetails"
        options={{
          title: "Plant Details",
        }}
      />
    </Stack>
  );
}
