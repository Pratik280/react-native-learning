import {ScrollView, StyleSheet, Text, View} from 'react-native';

const FlatCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FlatCards</Text>
      <ScrollView horizontal style={[styles.cardContainer]}>
        <View style={[styles.card, styles.bgRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.bgGreen]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.bgBlue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.bgPurple]}>
          <Text>Purple</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    padding: 20,
  },
  heading: {
    fontSize: 32,
  },
  cardContainer: {
    paddingVertical: 10,
    // display: 'flex',
    // flexDirection: 'row',
    // gap: 10,
  },
  card: {
    fontSizel: 24,
    margin: 8,
    padding: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  bgRed: {
    backgroundColor: '#ef4444',
  },
  bgGreen: {
    backgroundColor: '#16a34a',
  },
  bgBlue: {
    backgroundColor: '#3b82f6',
  },
  bgPurple: {
    backgroundColor: '#a855f7',
  },
});
