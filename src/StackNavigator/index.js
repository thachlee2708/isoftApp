import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import FirstTimeLogin from '../Screens/Stacks/Auth/FirstTimeLogin';
import React from 'react';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={FirstTimeLogin}
        name="FirstTimeLogin"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootStack;
