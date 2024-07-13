import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { appColorPalette } from '../../utilities/constants';

const hexToRGBA = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };


const CustomInput = ({ label,custombcg, ...props }) => {
    const [focus,setFocus]=useState(false)
    // console.log(custombcg)
    return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput onFocus={()=>setFocus(true)} onBlur={()=>(setFocus(false))} backgroundColor={hexToRGBA(custombcg, 0.1)} style={focus?styles.input(custombcg):styles.input('gray')} cursorColor='black' {...props} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'gray',
        fontWeight: 'bold',
    },
    input: (custombcg) => {
        return {
            height: 40,
            borderColor: custombcg,
            borderBottomColor: '#000',
            borderBottomWidth: 2,
            borderRadius:10,
            padding:10,
            fontSize:16,
            fontWeight:'400'
        }
    },
});

export default CustomInput
