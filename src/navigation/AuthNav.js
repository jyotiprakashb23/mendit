import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/authentication/Welcome';
import SignUp from '../pages/authentication/SignUp';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{
                headerShown:false
            }} />
            <Stack.Screen name="Signup" component={SignUp} options={{
                animation: 'slide_from_right',
                headerShown:false
            }} />
        </Stack.Navigator>
    );
};

export default AuthNav;
