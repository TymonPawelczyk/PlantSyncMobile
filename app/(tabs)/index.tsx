import React from 'react';
import {RefreshControl ,StyleSheet} from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
    return (
      <SafeAreaProvider> 
      <ThemedSafeAreaView>
        <StatusBar style="auto"/>    
        <ThemedScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
          <ThemedText style={styles.text}>
            Home screen
          </ThemedText>
          
        </ThemedScrollView>
      </ThemedSafeAreaView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    padding: 12,
  },
});
