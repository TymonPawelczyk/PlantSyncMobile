import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

/**
 * Props for WeatherComponent
 * @param locationText    - name of the location (e.g. "San Francisco")
 * @param currentTemp     - current temperature (e.g. 72)
 * @param weatherText     - short weather description (e.g. "Sunny")
 * @param highTemp        - forecasted high temperature (e.g. 76)
 * @param lowTemp         - forecasted low temperature (e.g. 59)
 */
interface WeatherComponentProps {
  locationText: string;
  currentTemp: number;
  weatherText: string;
  highTemp: number;
  lowTemp: number;
}

const WeatherComponent: React.FC<WeatherComponentProps> = ({
  locationText,
  currentTemp,
  weatherText,
  highTemp,
  lowTemp,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WEATHER</Text>
      <View style={styles.topRow}>
        <Ionicons name="sunny" size={80} color="#FFD700" />
        <View style={styles.tempBlock}>
          <Text style={styles.currentTempText}>{currentTemp}°</Text>
          <Text style={styles.weatherText}>{weatherText}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomRow}>
        <Text style={styles.locationText}>{locationText}</Text>
        <Text style={styles.highLowText}>
          H:{highTemp}°  L:{lowTemp}°
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    margin: 5,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempBlock: {
    marginLeft: 16,
  },
  currentTempText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#374151',
  },
  weatherText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#374151',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  highLowText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
});

export default WeatherComponent;
