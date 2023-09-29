import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Sample data
const hotelData = [
  {
    id: '1',
    image: require('../../../assets/apartment3.jpg'),
    name: 'Dreamsville House',
    location: 'JL Sultan Iskandar Muda',
    rating: '1.8km',
   
  },
  {
    id: '2',
    image: require('../../../assets/apartment2.jpg'),
    name: 'Ascot House',
    location: 'New York, USA',
    rating: '4.5km',
   
  },
  {
    id: '3',
    image: require('../../../assets/house3.jpg'),
    name: 'Richard House',
    location: 'London, UK',
    rating: '4.2km',
    
  },
];

const houseData = [
  {
    id: '1',
    image: require('../../../assets/apartment1.jpg'),
    name: 'Orchad House',
    price: 'Rp 2500,000,000/year',
    bedrooms: 6,
    bathrooms: 4,
  },
  {
    id: '2',
    image: require('../../../assets/apartment3.jpg'),
    name: 'The Hollies House',
    price: 'Rp 200,000,000/year',
    bedrooms: 5,
    bathrooms: 2,
  },
];

// main function fo the Home screen
const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.topLocationText}>location</Text>
          </View>
          <Text style={styles.companyNameText}>Jakarta</Text>
          <TouchableOpacity style={styles.dropdownIcon}>
            <Icon name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={30} color="black" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="search-outline" size={25} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search address, or near you"
            placeholderTextColor="#999"
          />
        </View>

        {/* Square Button with Filter Icons */}
        <View style={styles.filterButton}>
          <TouchableOpacity>
            <Icon name="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === 'House' && {
                  backgroundColor: '#0A8ED9',
                },
              ]}
              onPress={() => handleButtonPress('House')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 'House' && { color: 'white' },
                ]}
              >
                House
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === 'Apartment' && {
                  backgroundColor: '#0A8ED9',
                },
              ]}
              onPress={() => handleButtonPress('Apartment')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 'Apartment' && { color: 'white' },
                ]}
              >
                Apartment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === 'Hotel' && {
                  backgroundColor: '#0A8ED9',
                },
              ]}
              onPress={() => handleButtonPress('Hotel')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 'Hotel' && { color: 'white' },
                ]}
              >
                Hotel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === 'Villa' && {
                  backgroundColor: '#0A8ED9',
                },
              ]}
              onPress={() => handleButtonPress('Villa')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 'Villa' && { color: 'white' },
                ]}
              >
                Villa
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* "Near from You" and "See More" Text */}
        <View style={[styles.textContainer, styles.nearFromYouContainer, { marginTop: 10 }]}>
          <Text style={styles.nearText}>Near from You</Text>
          <TouchableOpacity>
            <Text style={[styles.seeMoreText, { paddingRight: 10 }]}>See More</Text>
          </TouchableOpacity>
        </View>

        {/* Hotel Cards */}
        <ScrollView horizontal style={styles.hotelCardContainer}>
          {hotelData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.hotelCard}
              onPress={() => {
                navigation.navigate('Details', { houseData: item }); // Navigate to Details page
              }}
            >
              <ImageBackground
                source={item.image}
                style={styles.hotelImage}
                imageStyle={styles.imageStyle}
              >
                <TouchableOpacity style={styles.locationButton}>
                  <Icon name="location-outline" size={20} color="white" style={styles.locationIcon} />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </TouchableOpacity>
                <View style={styles.infoContainer}>
                  <Text style={styles.hotelName}>{item.name}</Text>
                  <Text style={styles.locationText}>{item.location}</Text>
                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
              
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* "Best for You" and "See More" Text */}
        <View style={[styles.textContainer, styles.bestForYouContainer, {marginTop:10}]}>
          <Text style={styles.bestText}>Best for You</Text>
          <TouchableOpacity>
            <Text style={[styles.seeMoreText]}>See More</Text>
          </TouchableOpacity>
        </View>

        {/* House Cards with Information */}
        <ScrollView style={[styles.houseCardContainer, {marginTop:20}]}>
          {houseData.map((item) => (
            <View key={item.id} style={styles.houseCard}>
              <Image
                source={require('../../../assets/house3.jpg')}
               
                style={styles.houseImage}
              />
              <View style={styles.houseInfoContainer}>
                <Text style={styles.houseName}>{item.name}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
                <View style={styles.bedBathContainer}>
                  <Icon name="bed-outline" size={18} color="black" />
                  <Text style={styles.bedBathText}>{item.bedrooms} Bedrooms</Text>
                  <Icon name="water-outline" size={18} color="black" />
                  <Text style={styles.bedBathText}>{item.bathrooms} Bathrooms</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.saveButton}>
                <Icon name="bookmark" size={30} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};


// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  companyNameText: {
    fontSize: 24,
    marginHorizontal: 7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 25,
  },
  dropdownIcon: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 7,
    paddingRight: 200,
  },
  notificationButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
    paddingRight: 0,
  },
  locationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topLocationText: {
    marginHorizontal: 29,
    color: 'gray',
  },
  locationText: {
    fontSize: 13,
    color: '#FAFAFA',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    paddingHorizontal: 13,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    width: 310,
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    marginLeft: 12,
    color: '#333',
  },
  filterButton: {
    position: 'absolute',
    top: 100,
    right: 10,
    backgroundColor: '#0A8ED9',
    borderRadius: 10,
    padding: 5,
    width: 40,
    height: 45,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 15,
    paddingHorizontal: 23,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#858585',
    fontSize: 15,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    paddingRight: -60,
  },
  nearText: {
    fontSize: 16,
  },
  seeMoreText: {
    fontSize: 15,
    color: 'gray',
    paddingRight: 40,
  },
  bestForYouContainer: {
    position: 'absolute',
    top: 498,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 11,
    paddingLeft: 3,
  },
  hotelCardContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  houseCardContainer: {
    marginTop: -10,
    marginBottom: 20,
  },
  hotelCard: {
    width: 190,
    height: 245,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  houseCard: {
    width: 250,
    height: 90,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 25,
  },
  hotelImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  houseImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  imageStyle: {
    borderRadius: 15,
  },
  infoContainer: {
    padding: 15,
  },
  houseInfoContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  houseName: {
    fontSize: 12.7,
    color: 'black',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 10.2,
    color: '#0A8ED9',
    marginTop: 8,
  },
  bedBathContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bedBathText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 5,
    marginTop: 2,
  },
  locationButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'gray',
    borderRadius: 28,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 7,
    paddingLeft: 8,
  },
  bedroomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bathroomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
