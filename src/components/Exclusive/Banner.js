import React from 'react';
import {Text, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Banner = () => {
  return (
      <LinearGradient
        colors={['#000000', 'rgba(128,128,128,0.8)']}
        style={styles.banner}
      >
        <Text style={styles.text}>Get upto 40% off on all services</Text>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Banner;
