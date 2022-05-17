import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import {colors, screenName} from '../../../constants';
import {pxScale} from '../../../Helpers';
import NotificationRow from '../../Tabs/RootTab/Home/commponents/NotificationRow';
import dataNotificationTest from '../../Tabs/RootTab/Home/dataTest/dataNotificationTest';
import {Marker} from 'react-native-svg';
import MarkAsReadButton from './components/MarkAsReadButton';
import NotificationList from './components/NotificationList';
const Notification = () => {
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.navigate(screenName.HomeScreen, {isReload: Math.random()});
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary.white,
        height: pxScale.hp(926),
      }}>
      <AppHeader textTitle={'Notifications'} onpressBackIcon={onGoBack} />
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <NotificationRow
          newNumber={dataNotificationTest.length}
          markAsRead={true}
        />
        <NotificationList data={dataNotificationTest} />
      </View>

      <MarkAsReadButton />
    </SafeAreaView>
  );
};
export default memo(Notification);
