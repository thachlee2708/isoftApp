import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, SafeAreaView, BackHandler, Text, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from 'components/AppHeader';
import {colors, screenName} from 'constants';
import {pxScale} from 'Helpers';
import NotificationRow from '../../Tabs/RootTab/Home/commponents/NotificationRow';
import MarkAsReadButton from './components/MarkAsReadButton';
import NotificationList from './components/NotificationList';
import {
  updateCheckedAmount,
  updateNotificationList,
  updatePreviousNotificationList,
} from 'Redux/Notification/reducers/notificationReducer';
import ModalMarkAsRead from './components/ModalMarkAsRead';
import BatchNotificationsAction from './components/BatchNotificationsAction';
import styles from './styles';
const Notification = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const notificationList = useSelector(
    rootState => rootState.notificationReducer?.notificationList,
  );
  const previousNotificationList = useSelector(
    rootState => rootState.notificationReducer?.previousNotificationList,
  );
  const checkedAmount = useSelector(
    rootState => rootState.notificationReducer?.checkedAmount,
  );
  const [notificationAmountToChange, setNotificationAmountToChange] =
    React.useState(0);
  const [showOptions, setShowOptions] = React.useState(false);
  const onpressOptions = React.useCallback(() => {
    !showOptions ? setShowOptions(true) : setShowOptions(false);
  }, [setShowOptions, showOptions]);
  const onPressMarkAsRead = React.useCallback(() => {
    setIsMarkAllAsRead(false);
    setShowOptions(!showOptions);
    setStateBatch(!stateBatch);
    setReadOrUnread('read');
  }, [setShowOptions, showOptions]);
  const onPressMarkAsUnRead = React.useCallback(() => {
    setIsMarkAllAsRead(false);
    setShowOptions(!showOptions);
    setStateBatch(!stateBatch);
    setReadOrUnread('unread');
  }, [setShowOptions, showOptions]);
  const [stateModal, setStateModal] = React.useState(false);
  const [stateBatch, setStateBatch] = React.useState(false);
  const [readOrUnread, setReadOrUnread] = React.useState('');
  const [isMarkAllAsRead, setIsMarkAllAsRead] = React.useState(false);

  const onGoBack = React.useCallback(() => {
    navigation.navigate(screenName.HomeScreen, {isReload: Math.random()});
  }, [navigation]);
  const arrList = JSON.parse(JSON.stringify(notificationList));
  const caculateFalseAmount = React.useCallback(() => {
    let newAmount = 0;
    notificationList.forEach((item, index) => {
      item.forEach((item, index) => {
        if (item.read == false) {
          newAmount++;
        }
      });
    });
    setNotificationAmountToChange(newAmount);
  }, [
    setNotificationAmountToChange,
    notificationList,
    previousNotificationList,
  ]);
  const onPressMarkAllAsRead = React.useCallback(() => {
    setIsMarkAllAsRead(true);
    caculateFalseAmount();
    arrList.map(item => {
      item.map(e => {
        e.read = true;
        console.log(e.read);
      });
    });
    setReadOrUnread('read');
    setStateModal(true);
    setTimeout(() => {
      setStateModal(false);
      dispatch(
        updatePreviousNotificationList(
          JSON.parse(JSON.stringify(notificationList)),
        ),
      );
    }, 1000);
    // console.log('arrList', arrList);
    dispatch(updateNotificationList(arrList));
  }, [dispatch, arrList]);
  const onPressCloseModal = React.useCallback(() => {
    dispatch(updateCheckedAmount(0));
    setStateBatch(false);
    setNotificationAmountToChange(0);
  }, [setStateBatch]);
  const onDoneMark = React.useCallback(() => {
    setNotificationAmountToChange(checkedAmount);
    setStateBatch(false);
    setStateModal(true);
    setTimeout(() => {
      setStateModal(false);
      dispatch(
        updatePreviousNotificationList(
          JSON.parse(JSON.stringify(notificationList)),
        ),
      );
      dispatch(updateCheckedAmount(0));
    }, 2000);
  }, [setStateBatch, setStateModal]);
  return (
    <SafeAreaView style={styles.container}>
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
          onDoneMark={onDoneMark}
          onPressCloseModal={onPressCloseModal}
        />
      )}
      {stateModal && (
        <ModalMarkAsRead
          onPress={() => {
            setStateModal(!stateModal);
          }}
          amountNumer={
            isMarkAllAsRead ? notificationAmountToChange : checkedAmount
          }
          isVisible={stateModal}
          readOrUnread={readOrUnread}
        />
      )}
    </SafeAreaView>
  );
};
export default memo(Notification);
