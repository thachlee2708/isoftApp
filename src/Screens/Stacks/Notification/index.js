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
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../../../components/AppHeader';
import {colors, screenName} from '../../../constants';
import {pxScale} from '../../../Helpers';
import NotificationRow from '../../Tabs/RootTab/Home/commponents/NotificationRow';
import dataNotificationTest from '../../Tabs/RootTab/Home/dataTest/dataNotificationTest';
import {Marker} from 'react-native-svg';
import MarkAsReadButton from './components/MarkAsReadButton';
import NotificationList from './components/NotificationList';
import {UPDATE_NOTIFICATION_LIST} from '../../../Redux/Notification/actions';
const Notification = () => {
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.navigate(screenName.HomeScreen, {isReload: Math.random()});
  }, [navigation]);
  const arr = JSON.parse(JSON.stringify(dataNotificationTest));
  console.log(arr);
  const dispatch = useDispatch();
  const notificationList = useSelector(
    rootState => rootState.notificationReducer?.notificationList,
  );
  React.useEffect(() => {
    if (notificationList.length === 0) {
      try {
        console.log('need update1');
        dispatch({
          type: UPDATE_NOTIFICATION_LIST,
          payload: [...arr],
        });
      } catch (error) {
        console.log('error UPDATE_NOTIFICATION_LIST', error);
      }
    }
  });
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary.white,
        height: pxScale.hp(926),
      }}>
      <AppHeader textTitle={'Notifications'} onpressBackIcon={onGoBack} />
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <NotificationRow
          newNumber={notificationList.length}
          markAsRead={true}
        />
        <NotificationList data={notificationList} />
      </View>

      <MarkAsReadButton />
    </SafeAreaView>
  );
};
export default memo(Notification);
