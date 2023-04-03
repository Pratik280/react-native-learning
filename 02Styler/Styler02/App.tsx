import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import FlatCards from './components/FlatCards';
import FancyCards from './components/FancyCards';
import Test from './components/Test';
import StyledCards from './components/StyledCards';

const App = () => {
  return (
    <SafeAreaView style={[styles.body]}>
      <ScrollView>
        <FlatCards />
        <FancyCards />
        {/* <StyledCards /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f9fafbA',
  },
});
