import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, TextInput } from "react-native";
import CustomTextInput from "../../components/Input/CustomTextInput";

const Welcome = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior="height" style={{flex:1}}>
        <View style={styles.container}>
            <Text>Hello there</Text>
            {/* <View>
                <Image
                    style={styles.logo}
                    source={require("../../../assets/AppLogo.png")}
                />
            </View> */}
            <CustomTextInput />
        </View>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'green',
        borderWidth: 2,
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    text: {
        color: "#fff",
        fontSize: 40,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "red",
    },
    logo: {
        height: 50,
        width: 100,
        borderRadius: 10
    },
    imageContainer: {
        position: 'relative',
        top: 50,
    },
    appButtonContainer: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    appButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Welcome;
