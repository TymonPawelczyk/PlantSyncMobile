import { Text, View, StyleSheet } from 'react-native';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks screen</Text>
      <Text style={styles.text}>Text at tasks screen</Text>
      <Text style={styles.text}>Text at tasks screen</Text>
      <Text style={styles.text}>Text at tasks screen</Text>
      <Text style={styles.text}>Text at tasks screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  }
  
});