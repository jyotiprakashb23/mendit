import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomIcon = ({ name, color }) => {
  return (
    <View>
      <Icon name={name} size={26} color={color || 'black'} />
    </View>
  );
};

export default CustomIcon;
