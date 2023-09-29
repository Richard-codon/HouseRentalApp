// import dependencies
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//the main function for the details screen
const Details = ({ route, navigation }) => {
  // Get the data for the selected house from the route params
  const { houseData } = route.params;

  // gallery images 
  const galleryImages = [
    require('../../../assets/house1.jpg'),
    require('../../../assets/house3.jpg'),
    require('../../../assets/apartment2.jpg'),
    require('../../../assets/apartment1.jpg'),
  ];

  // Placeholder image source for the map component
  const mapImageSource = require('../../../assets/map.jpg');

  // JSX
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* House Image Card */}
        <View style={styles.imageCard}>
          <Image source={houseData.image} style={styles.houseImage} />
          <View style={styles.overlayContent}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Icon name="chevron-back" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton}>
                <Icon name="bookmark" size={30} color="white" />
              </TouchableOpacity>
            </View>

            {/* House Details */}
            <Text style={styles.houseName}>{houseData.name}</Text>
            <Text style={styles.locationText}>{houseData.location}</Text>
            <View style={styles.bedBathContainer}>
              <Icon name="bed-outline" size={20} color="white" />
              <Text style={styles.bedBathText}>{houseData.bedrooms} Bedrooms</Text>
              <Icon name="water-outline" size={20} color="white" />
              <Text style={styles.bedBathText}>{houseData.bathrooms} Bathrooms</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>
          The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars..
        </Text>

        {/* Profile */}
        <View style={styles.profileContainer}>
          <Image source={require('../../../assets/profilePhoto.jpg')} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>Garry Allen</Text>
              <Text style={styles.ownerText}>Owner</Text>
            </View>
            <View style={styles.contactIcons}>
              <TouchableOpacity>
                <View style={styles.contactIcon}>
                  <Icon name="call" size={25} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.contactIcon}>
                  <Icon name="chatbubbles" size={25} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Gallery */}
        <Text style={styles.galleryText}>Gallery</Text>
        <FlatList
          horizontal
          data={galleryImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.galleryImage} />
          )}
        />

        {/* Map */}
        <Image source={mapImageSource} style={styles.mapImage} />

        {/* Price and Rent Now Button */}
        <View style={styles.priceAndButtonContainer}>
          <Text style={styles.priceText}>Price: Rp 25000,000,000 / year</Text>

          <TouchableOpacity style={styles.rentNowButton}>
            <Text style={styles.rentNowButtonText}>Rent Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageCard: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    margin: 20,
    marginTop: 5,
  },
  houseImage: {
    width: '100%',
    height: 250,
  },
  overlayContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
  },
  saveButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
  },
  houseName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 75,
  },
  locationText: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  bedBathContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bedBathText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 5,
  },
  descriptionHeader: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 10,
  },
  profileTextContainer: {
    marginTop: 10,
  },
  profileName: {
    fontSize: 16,
  },
  ownerText: {
    fontSize: 13,
    color: 'gray',
  },
  contactIcons: {
    flexDirection: 'row',
    marginTop: -20,
    marginLeft: 195,
  },
  contactIcon: {
    backgroundColor: '#0A8ED9',
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  galleryText: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 1,
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    marginHorizontal: 12,
  },
  mapImage: {
    width: '95%',
    height: 115,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 13,
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  priceText: {
    fontSize: 12,
  },
  rentNowButton: {
    backgroundColor: '#0A8ED9',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  rentNowButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Details;
