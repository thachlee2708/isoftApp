import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import FirstTimeLogin from '../Screens/Stacks/Auth/FirstTimeLogin';
import React from 'react';
import StaffAccess from '../Screens/Stacks/Auth/StaffAccess';
import PDPAAgree from '../Screens/Stacks/Auth/PDPAAgree';
import ResetPassword from '../Screens/Stacks/Auth/ResetPassword';
import RootTabNavigator from '../TabNavigator/Root';
import {screenName} from '../constants';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={FirstTimeLogin}
        name="FirstTimeLogin"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={StaffAccess}
        name="StaffAccess"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={PDPAAgree}
        name="PDPAAgree"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ResetPassword}
        name="ResetPassword"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={RootTabNavigator}
        name={screenName.RootTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootStack;
