import RootStack from './StackNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {screenName} from './constants';
import {useSelector} from 'react-redux';
LogBox.ignoreAllLogs();
const Main = () => {
  const [firstLoggedIn, setFirstLoggedIn] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(null);
  const token = useSelector(rootState => rootState.authReducer?.token);
  const firstLogin = useSelector(
    rootState => rootState.authReducer?.firstLogin,
  );
  React.useEffect(() => {
    if (firstLogin) {
      setFirstLoggedIn(true);
    } else if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn == true) {
    return (
      <NavigationContainer>
        <RootStack initialRouteName={screenName.RootTab} />
      </NavigationContainer>
    );
  } else if (firstLoggedIn == true) {
    return (
      <NavigationContainer>
        <RootStack initialRouteName={screenName.FirstTimeLogin} />
      </NavigationContainer>
    );
  } else if (loggedIn == false) {
    return (
      <NavigationContainer>
        <RootStack
          initialRouteName={screenName.StaffAccess}
          initialParams={{
            isReload: Math.random(),
            notShowBackIcon: true,
          }}
        />
      </NavigationContainer>
    );
  }
  return null;
};

export default Main;
