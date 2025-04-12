import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme.web';

export type ThemedTextProps = TextProps & {
  style?: TextStyle;
};

export function ThemedText(props: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const colors = {
    text: colorScheme === 'dark' ? '#ffffff' : '#000000',
  };

  const { style, ...otherProps } = props;

  return (
    <Text
      style={[{ color: colors.text }, style]}
      {...otherProps}
    />
  );
}
