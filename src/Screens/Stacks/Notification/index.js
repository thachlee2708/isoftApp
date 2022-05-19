import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, SafeAreaView, Platform, Text, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../../../components/AppHeader';
import {colors, screenName} from '../../../constants';
import {pxScale} from '../../../Helpers';
import NotificationRow from '../../Tabs/RootTab/Home/commponents/NotificationRow';
import MarkAsReadButton from './components/MarkAsReadButton';
import NotificationList from './components/NotificationList';
import {UPDATE_NOTIFICATION_LIST} from '../../../Redux/Notification/actions';
import ModalMarkAsRead from './components/ModalMarkAsRead';
import BatchNotificationsAction from './components/BatchNotificationsAction';
const Notification = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const notificationList = useSelector(
    rootState => rootState.notificationReducer?.notificationList,
  );
  const [notificationAmountToChange, setNotificationAmountToChange] =
    React.useState(0);
  const [showOptions, setShowOptions] = React.useState(false);
  const onpressOptions = React.useCallback(() => {
    !showOptions ? setShowOptions(true) : setShowOptions(false);
  }, [setShowOptions, showOptions]);
  const onPressMarkAsRead = React.useCallback(() => {
    setShowOptions(!showOptions);
    setStateBatch(!stateBatch);
    setReadOrUnread('read');
  }, [setShowOptions, showOptions]);
  const onPressMarkAsUnRead = React.useCallback(() => {
    setShowOptions(!showOptions);
    setStateBatch(!stateBatch);
    setReadOrUnread('unread');
  }, [setShowOptions, showOptions]);
  const [stateModal, setStateModal] = React.useState(false);
  const [stateBatch, setStateBatch] = React.useState(false);
  const [readOrUnread, setReadOrUnread] = React.useState('');
  const [checkedAmount, setCheckedAmount] = React.useState(0);
  const onGoBack = React.useCallback(() => {
    navigation.navigate(screenName.HomeScreen, {isReload: Math.random()});
  }, [navigation]);
  const arrNotificationList = notificationList;
  const onPressMarkAllAsRead = React.useCallback(() => {
    let newAmount = 0;
    notificationList.forEach(element => {
      element.forEach(item => {
        if (item.read == false) {
          newAmount++;
        }
      });
    });
    console.log(newAmount);
    setNotificationAmountToChange(newAmount);
    arrNotificationList.map(item => {
      item.map(e => {
        e.read = true;
      });
    });
    setReadOrUnread('read');
    setStateModal(true);
    setTimeout(() => {
      setStateModal(false);
    }, 1000);
    try {
      dispatch({
        type: UPDATE_NOTIFICATION_LIST,
        payload: [...arrNotificationList],
      });
    } catch (error) {
      console.log('error UPDATE_NOTIFICATION_LIST', error);
    }
  }, [dispatch, arrNotificationList]);
  const onPressCloseModal = React.useCallback(() => {
    setStateBatch(false);
    setCheckedAmount(0);
  }, [setStateBatch]);
  const onPressDoneMark = React.useCallback(() => {
    setStateBatch(false);
    setStateModal(true);
    setCheckedAmount(0);
    setTimeout(() => {
      setStateModal(false);
    }, 2000);
  }, [setStateBatch, setStateModal]);
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === 'ios' ? pxScale.hp(40) : 0,
        backgroundColor: colors.primary.white,
        height: pxScale.hp(926),
      }}>
      <AppHeader textTitle={'Notifications'} onpressBackIcon={onGoBack} />
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <NotificationRow onPress={onPressMarkAllAsRead} markAsRead={true} />
        <NotificationList data={notificationList} />
      </View>

      <MarkAsReadButton
        showOptions={showOptions}
        onpressOptions={onpressOptions}
        onPressMarkAsRead={onPressMarkAsRead}
        onPressMarkAsUnRead={onPressMarkAsUnRead}
      />
      {stateBatch && (
        <BatchNotificationsAction
          isVisible={stateBatch}
          readOrUnread={readOrUnread}
          dataList={notificationList}
          onPressDoneMark={onPressDoneMark}
          onCheckItem={() => setCheckedAmount(checkedAmount + 1)}
          onPressCloseModal={onPressCloseModal}
          checkedAmount={checkedAmount}
        />
      )}
      {stateModal && (
        <ModalMarkAsRead
          onPress={() => {
            setStateModal(!stateModal);
          }}
          amountNumer={notificationAmountToChange}
          isVisible={stateModal}
          readOrUnread={readOrUnread}
        />
      )}
    </SafeAreaView>
  );
};
export default memo(Notification);
