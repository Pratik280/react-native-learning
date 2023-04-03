import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 60,
    fontWeight: '600',
  },
  whiteText: {
    fontSize: 60,
    fontWeight: '600',
    color: '#ffffff',
  },
  darkText: {
    fontSize: 60,
    fontWeight: '600',
    color: '#000000',
  },
});

export default AppPro;
