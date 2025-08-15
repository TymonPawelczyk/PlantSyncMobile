import { useTheme } from './ThemeProvider';

export function useColorScheme() {
  const { theme } = useTheme();
  return theme;
}

