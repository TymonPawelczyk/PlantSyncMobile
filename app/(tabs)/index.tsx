import { Text, View,  StyleSheet, Appearance, StatusBar } from 'react-native';

export default function Index() {
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    console.log('Dark mode is enabled');
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />      
        <Text style={styles.text} >Home screen</Text>
      </View>
    );
  } else {
    console.log('Light mode is enabled');
    return (
      <View style={stylesLight.container}>      
        <StatusBar
            backgroundColor="blue"
            barStyle="dark-content"
        />
        <Text style={stylesLight.text} >Home screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
})
