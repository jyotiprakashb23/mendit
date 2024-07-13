import React from 'react'
import { View, Text, StyleSheet, Dimensions,Platform } from 'react-native'
import Banner from '../../components/Exclusive/Banner'
import { appColorPalette } from '../../utilities/constants';
const screenHeight = Dimensions.get('window').height;
import ServiceTile from '../../components/Basic/ServiceTile';

console.log(Platform.OS, 0.05 * screenHeight)
console.log(Platform)

const Home = ({navigation}) => {

  const cleaningImage = require("../../utilities/images/mendit-cleaning.png")
  const paintingImage = require(
    "../../utilities/images/mendit-painting.png"
  )

  const arr = [
    {
      title: "Painting",
      color: "#FF7D29",
      image: paintingImage,
      routePath:'painting'
    },
    {
      title: "Water proofing",
      color: "#59D5E0",
      image: cleaningImage,
      routePath:'water proofing'
    },
    {
      title: "House Repairing",
      color: "#FF4191",
      image: cleaningImage,
      routePath:'house repairing'
    },
    {
      title: "House Cleaning",
      color: "#78ABA8",
      image: paintingImage,
      routePath:'house cleaning'
    },
    {
      title: "Pest Control",
      color: "#90D26D",
      image: paintingImage,
      routePath:'pest control'
    },
    {
      title: "Book a Visit",
      color: "#1A2130",
      image: cleaningImage,
      routePath:'book visit'
    },

  ]

  return (
    <View style={styles.container}>
      <Banner />
      <Text style={styles.heading}>
        Explore Our Services
      </Text>
      <View style={styles.services}>
        {
          arr.map(
            (item, index) => {
              return (
                <ServiceTile navigation={navigation} routePath={item.routePath} key={index} backgroundColor={item.color} serviceName={item.title} imageUrl={item.image} />
              )
            }
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0.05 * screenHeight,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  services: {
    position: 'relative',
    // top: 40,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    borderColor: 'red',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: appColorPalette.primaryBLACK,
    width: '90%',
    marginVertical: 20
  }
});

export default Home
