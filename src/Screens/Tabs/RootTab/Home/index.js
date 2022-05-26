import {
  SafeAreaView,
  Text,
  View,
  BackHandler,
  ScrollView,
  Platform,
} from 'react-native';
import React, {memo} from 'react';
import {AppImage} from '../../../../assets/images';
import {pxScale} from '../../../../Helpers';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import HeaderHome from './commponents/headerHome';
import NotificationRow from './commponents/NotificationRow';
import CardApplications from './commponents/cardApplications';
import CardQR from './commponents/cardQR';
import ListCard from './commponents/listCard';
import dataListTest from './dataTest/dataListTest.js';
import dataNotificationTest from './dataTest/dataNotificationTest';
import {screenName} from '../../../../constants';
const Home = ({route}) => {
  const isReload = route.params;
  const navigation = useNavigation();
  const [shouldRenderBlur, setShouldRenderBlur] = React.useState(
    Platform.OS === 'android' ? false : true,
  );
  React.useEffect(() => {
    setTimeout(() => setShouldRenderBlur(true), 1000);
  }, [isReload]);
  const backAction = () => {
    Platform.OS === 'android' ? setShouldRenderBlur(false) : null;
    navigation.goBack();
    return true;
  };
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  const navigateToNotifications = React.useCallback(() => {
    Platform.OS === 'android' ? setShouldRenderBlur(false) : null;
    navigation.navigate(screenName.Notification);
  }, [navigation]);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeaderHome
        lastLoggedInTime={'21 Oct 2021 10:44:20'}
        shouldRenderBlur={shouldRenderBlur}
      />
      <View
        style={{
          marginHorizontal: pxScale.wp(16),
        }}>
        <CardQR />
        <NotificationRow viewAll={true} onPress={navigateToNotifications} />
        <ListCard data={dataTest} />
        <Text style={styles.ApplicationText}>Applications</Text>
        <CardApplications
          setShouldRenderBlur={() => setShouldRenderBlur(false)}
        />
      </View>
    </ScrollView>
  );
};
export default memo(Home);
