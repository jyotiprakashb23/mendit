import { View, StyleSheet, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './src/navigation/AuthNav';
import MyTabs from './src/navigation/BottomNav';
import Constants from 'expo-constants';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyTabs />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      marginTop:Constants.statusBarHeight
    }
  }
)

export default App
