import { createStackNavigator } from '@react-navigation/stack';
import ServicesItem from '../pages/content/ServicesItem';

const Stack = createStackNavigator();

const ServicesNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="painting" options={{
                headerShown: false
            }} component={ServicesItem} />
            <Stack.Screen name="water proofing" options={{
                headerShown: false
            }} component={ServicesItem} />
            <Stack.Screen name="house repairing" options={{
                headerShown: false
            }} component={ServicesItem} />
            <Stack.Screen name="house cleaning" options={{
                headerShown: false
            }} component={ServicesItem} />
            <Stack.Screen name="pest control" options={{
                headerShown: false
            }} component={ServicesItem} />
            <Stack.Screen name="book visit" options={{
                headerShown: false
            }} component={ServicesItem} />
        </Stack.Navigator>
    )
}

export default ServicesNav