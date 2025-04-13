import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from 'react-native';

export type ThemedSafeAreaViewProps = React.ComponentProps<typeof SafeAreaView> & {
  style?: ViewStyle;
};

export function ThemedSafeAreaView(props: ThemedSafeAreaViewProps) {
  const colorScheme = useColorScheme();
  const colors = {
    background: colorScheme === 'dark' ? '#212529' : '#D8D7D4',
    border: colorScheme === 'dark' ? '#343a40' : '#D8D7D4',
  };

  const { style, ...otherProps } = props;

  return (
    <SafeAreaView
        style={[
            styles.contentContainer, // Optional base content container styles
            { backgroundColor: colors.background,
              borderColor: colors.border,
             }, // Apply background color from theme
            style,
        ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  // Add any default SafeAreaView styles here if needed
  contentContainer: {  
    flex: 1,
    justifyContent: 'center', 
    borderBottomWidth: 0.2,
}
});