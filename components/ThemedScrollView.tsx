import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme.web';

// Define props, extending ScrollViewProps
export type ThemedScrollViewProps = ScrollViewProps & {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};

export function ThemedScrollView(props: ThemedScrollViewProps) {
  const colorScheme = useColorScheme(); // Get system color scheme
  const colors = {
    background: colorScheme === 'dark' ? '#242626' : '#D8D7D4',
  };
  const { style, contentContainerStyle, ...otherProps } = props;

  return (
    <ScrollView
      style={[
        { backgroundColor: colors.background }, // Apply background color from theme
        style,
      ]}
      contentContainerStyle={[
        styles.contentContainer, // Optional base content container styles
        contentContainerStyle,
      ]}
      {...otherProps} // Pass down other ScrollView props
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    // Add any default content container styles if needed
    // e.g., padding: 16,
  },
});