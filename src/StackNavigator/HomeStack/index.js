import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import {screenName} from 'constants';
import Notification from 'Screens/Stacks/Notification';
import Home from 'Screens/Tabs/RootTab/Home';
import HumanResourceMain from 'Screens/Stacks/HumanResource/HumanResourceMain';
import Payroll from 'Screens/Stacks/HumanResource/Payroll';
import ApplyLeave from 'Screens/Stacks/HumanResource/ApplyLeave';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name={screenName.HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Notification}
        name={screenName.Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={HumanResourceMain}
        name={screenName.HumanResourceMain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Payroll}
        name={screenName.Payroll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ApplyLeave}
        name={screenName.ApplyLeave}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
