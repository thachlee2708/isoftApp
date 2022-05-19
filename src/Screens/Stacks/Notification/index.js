import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, SafeAreaView, Platform, Text, Modal} from 'react-native';
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
import ModalMarkAsRead from './components/ModalMarkAsRead';
const Notification = () => {
  const navigation = useNavigation();
  const [newNotificationAmount, setNewNotificationAmount] = React.useState(0);
  const [notificationAmountToRead, setNotificationAmountToRead] =
    React.useState(0);
  const [stateModal, setStateModal] = React.useState(false);
  const [stateBatch, setStateBatch] = React.useState(false);
  const [readOrUnread, setReadOrUnread] = React.useState('');
  const onGoBack = React.useCallback(() => {
    navigation.navigate(screenName.HomeScreen, {isReload: Math.random()});
  }, [navigation]);
  const arrNotificationList = JSON.parse(JSON.stringify(dataNotificationTest));
  const dispatch = useDispatch();
  const notificationList = useSelector(
    rootState => rootState.notificationReducer?.notificationList,
  );
  React.useEffect(() => {
    let newAmount = 0;
    notificationList.forEach(element => {
      element.forEach(item => {
        if (item.read == false) {
          newAmount++;
        }
      });
    });
    setNewNotificationAmount(newAmount);
    if (notificationList.length === 0) {
      try {
        dispatch({
          type: UPDATE_NOTIFICATION_LIST,
          payload: [...arrNotificationList],
        });
      } catch (error) {
        console.log('error UPDATE_NOTIFICATION_LIST', error);
      }
    }
  });
  const onPressMarkAllAsRead = React.useCallback(() => {
    arrNotificationList.map(item => {
      item.map(e => {
        e.read = true;
      });
    });
    setReadOrUnread('read');
    setStateModal(true);
    setNotificationAmountToRead(newNotificationAmount);
    setTimeout(() => {
      setStateModal(false);
      try {
        dispatch({
          type: UPDATE_NOTIFICATION_LIST,
          payload: [...arrNotificationList],
        });
      } catch (error) {
        console.log('error UPDATE_NOTIFICATION_LIST', error);
      }
    }, 1000);
  }, [dispatch, arrNotificationList]);
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === 'ios' ? pxScale.hp(40) : 0,
        backgroundColor: colors.primary.white,
        height: pxScale.hp(926),
      }}>
      <AppHeader textTitle={'Notifications'} onpressBackIcon={onGoBack} />
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <NotificationRow
          onPress={onPressMarkAllAsRead}
          newNumber={newNotificationAmount}
          markAsRead={true}
        />
        <NotificationList data={notificationList} />
      </View>

      <MarkAsReadButton
        onPressMarkAsRead={() => {
          setReadOrUnread('read');
          setStateBatch(!stateBatch);
        }}
        onPressMarkAsUnRead={() => {
          setReadOrUnread('unread');
          setStateBatch(!stateBatch);
        }}
      />
      {stateModal && (
        <ModalMarkAsRead
          onPress={() => {
            setStateModal(!stateModal);
          }}
          amountNumer={notificationAmountToRead}
          isVisible={stateModal}
          readOrUnread={readOrUnread}
        />
      )}
    </SafeAreaView>
  );
};
export default memo(Notification);
