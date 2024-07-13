import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const ServiceTile = ({ serviceName, imageUrl, navigation, routePath, backgroundColor = 'black' }) => {
  const params={
    pageTitle:serviceName,
    pageTheme:backgroundColor
  }
  // console.log(params,routePath)
  return (
    <TouchableOpacity style={{ width: '47%' }} onPress={() => navigation.navigate('Request Service', {
      screen: routePath, 
      params
    })}>
      <View style={[styles.tile, { backgroundColor }]}>
        <Text style={styles.serviceName}>{serviceName}</Text>
        <Image source={imageUrl} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginBottom: 22,
    height: 0.15 * screenHeight,
  },
  serviceName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    width: '50%',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
    resizeMode: 'cover',
  },
});

export default ServiceTile;
