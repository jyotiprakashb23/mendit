import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import CustomInput from '../../components/Basic/CustomInput'
import ServicesNav from '../../navigation/ServicesNav';

const screenHeight = Dimensions.get('window').height;
const ServiceRequest = () => {
  return (
    // <View style={styles.container}>
    //   <ImageBackground
    //     source={require('../../utilities/images/bg-paint.jpg')}
    //     style={{ height: screenHeight * 0.3, width: '100%',marginBottom:20 }}
    //     resizeMode="cover"
    //   >
    //     <View style={styles.overlay}>
    //       <Text style={styles.overlayText}>
    //         Painting
    //       </Text>
    //     </View>
    //   </ImageBackground>
    //   <CustomInput label="Name" custombcg='orange'/>
    //   <CustomInput label="Email" custombcg='orange'/>
    //   <CustomInput label="Address" custombcg='orange'/>
    //   <CustomInput label="Contact Number" custombcg='orange' keyboardType="numeric"/>
    // </View>
    <ServicesNav/>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  overlay: {
    flex:1,
    justifyContent:'flex-end'
  },
  overlayText:{
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
    paddingLeft:10
  }
})

export default ServiceRequest
