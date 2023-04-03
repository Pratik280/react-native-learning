import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import OpenURLButton from './OpenURLButton';
import LinkButton from './OpenURLButton';

const openWebsite = (websiteLink: string) => {
  Linking.openURL(websiteLink);
};

const FancyCards = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.card]}>
        <Image
          style={[styles.cardHeroImage]}
          source={{
            uri: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
          }}
        />
        <View style={[styles.cardText]}>
          <Text style={[styles.cardHeading]}>Taj Mahal</Text>
          <Text style={[styles.cardHeadingTwo]}>Agra, Delhi</Text>
          <Text style={[styles.cardDescription]}>
            The Taj Mahal is a magnificent mausoleum located in Agra, India. It
            was built by the Mughal emperor Shah Jahan in memory of his beloved
            wife Mumtaz Mahal and is considered one of the most beautiful
            buildings in the world. The Taj Mahal is renowned for its stunning
            white marble structure, intricate decorative elements, and beautiful
            gardens.
          </Text>
          {/* <Text style={[styles.cardFooter]}>Lorem, ipsum.</Text> */}
          {/* <OpenURLButton url="https://google.com">Open Google</OpenURLButton> */}
          <TouchableOpacity
            onPress={() => openWebsite('https://twitter.com/pratikchandlekr')}>
            <Text style={[styles.button]}>Open Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    padding: 20,
  },
  card: {
    elevation: 3,
    marginTop: 24,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardHeroImage: {
    height: 225,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardText: {
    padding: 16,
    backgroundColor: '#e5e7eb',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardHeading: {
    color: '#374151',
    fontSize: 20,
    fontWeight: '600',
  },
  cardHeadingTwo: {
    color: '#4b5563',
    fontSize: 16,
    fontWeight: '400',
  },
  cardDescription: {
    color: '#6b7280',
    marginTop: 10,
  },
  cardFooter: {
    color: '#4b5563',
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#3b82f6',
    color: '#f9fafb',
  },
});
