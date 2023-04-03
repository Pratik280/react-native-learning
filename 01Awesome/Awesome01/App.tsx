import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Button
          title="Submit"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
