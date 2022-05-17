import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import {screenName} from '../../constants';
import Notification from '../../Screens/Stacks/Notification';
import Home from '../../Screens/Tabs/RootTab/Home';
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
    </Stack.Navigator>
  );
};
export default HomeStack;
