import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, Platform, ScrollView } from 'react-native'
import CustomInput from '../../components/Basic/CustomInput'

const screenHeight = Dimensions.get('window').height;

const ServicesItem = ({ navigation }) => {
    const { pageTheme, pageTitle } = (navigation.getState().routes[navigation.getState().routes.length - 1].params)
    console.log(pageTheme, pageTitle)
    return (
        <View style={styles.container}>
            <ImageBackground
                // source={require('../../utilities/images/bg-paint.jpg')}
                backgroundColor={pageTheme}
                style={{ height: screenHeight * 0.3, width: '100%', marginBottom: 20 }}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Text style={styles.overlayText}>
                        {pageTitle}
                    </Text>
                </View>
            </ImageBackground>
            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <CustomInput label="Name" custombcg={pageTheme} />
                <CustomInput label="Email" custombcg={pageTheme} />
                <CustomInput label="Address" custombcg={pageTheme} />
                <CustomInput label="Contact Number" custombcg={pageTheme} keyboardType="numeric" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    overlayText: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: 'bold',
        paddingLeft: 10
    }
})

export default ServicesItem


