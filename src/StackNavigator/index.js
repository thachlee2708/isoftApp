import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import FirstTimeLogin from 'Screens/Stacks/Auth/FirstTimeLogin';
import React from 'react';
import StaffAccess from 'Screens/Stacks/Auth/StaffAccess';
import PDPAAgree from 'Screens/Stacks/Auth/PDPAAgree';
import ResetPassword from 'Screens/Stacks/Auth/ResetPassword';
import RootTabNavigator from 'TabNavigator/Root';
import {screenName} from 'constants';
import ChangePassword from 'Screens/Stacks/Auth/ChangePassword';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const RootStack = ({initialRouteName, initialParams}) => {
  const token = useSelector(rootState => rootState.authReducer?.token);
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {!token ? (
        <Stack.Group>
          {/* AUTH GROUP*/}
          <Stack.Screen
            component={FirstTimeLogin}
            name={screenName.FirstTimeLogin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            initialParams={initialParams}
            component={StaffAccess}
            name={screenName.StaffAccess}
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={PDPAAgree}
            name={screenName.PDPAAgree}
            options={{headerShown: false}}
          />
        </Stack.Group>
      ) : null}
      <Stack.Screen
        component={RootTabNavigator}
        name={screenName.RootTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ResetPassword}
        name={screenName.ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ChangePassword}
        name={screenName.ChangePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootStack;
