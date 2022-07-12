import RootStack from './StackNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {screenName} from 'constants';
import {useSelector} from 'react-redux';
import OneSignal from 'react-native-onesignal';
import {createNavigationContainerRef} from '@react-navigation/native';

LogBox.ignoreAllLogs();
const Main = () => {
  const navigationRef = React.createRef();
  const [firstLoggedIn, setFirstLoggedIn] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(null);
  const [fromNoti, setFromNoti] = React.useState(null);
  const token = useSelector(rootState => rootState.authReducer?.token);
  const firstLogin = useSelector(
    rootState => rootState.authReducer?.firstLogin,
  );
  React.useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('455ca426-534a-4e36-8b8f-b74f1b3e1261');
    //END OneSignal Init Code

    //Prompt for push on iOS
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response);
    });

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);

      navigationRef.current?.navigate(
        notification?.notification?.additionalData?.screen,
      );
    });
    if (firstLogin) {
      setFirstLoggedIn(true);
    } else if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  });
  if (loggedIn == true) {
    return (
      <NavigationContainer ref={navigationRef}>
        <RootStack initialRouteName={null} />
      </NavigationContainer>
    );
  } else if (firstLoggedIn == true) {
    return (
      <NavigationContainer ref={navigationRef}>
        <RootStack initialRouteName={screenName.FirstTimeLogin} />
      </NavigationContainer>
    );
  } else if (loggedIn == false) {
    return (
      <NavigationContainer ref={navigationRef}>
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
