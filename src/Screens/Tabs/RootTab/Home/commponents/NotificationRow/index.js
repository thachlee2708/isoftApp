import {Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
import {useDispatch, useSelector} from 'react-redux';
import dataNotificationTest from '../../dataTest/dataNotificationTest';
import {
  updateNotificationList,
  updatePreviousNotificationList,
} from 'Redux/Notification/reducers/notificationReducer';
const notificationRow = ({onPress, viewAll, markAsRead}) => {
  const dispatch = useDispatch();
  const notificationList = useSelector(
    rootState => rootState.notificationReducer?.notificationList,
  );
  const arrNotificationList = JSON.parse(JSON.stringify(dataNotificationTest));
  const [newNotificationAmount, setNewNotificationAmount] = React.useState(0);
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
      dispatch(
        updateNotificationList(JSON.parse(JSON.stringify(arrNotificationList))),
      );
      dispatch(
        updatePreviousNotificationList(
          JSON.parse(JSON.stringify(arrNotificationList)),
        ),
      );
    }
  });
  return (
    <View style={styles.container}>
      <AppImageSvg
        source={AppIcon.greenNotificationIcon}
        height={pxScale.hp(22)}
        width={pxScale.wp(18)}
      />
      <View style={styles.textNewContainer}>
        <Text style={styles.textNew}>{newNotificationAmount} new</Text>
      </View>
      <View style={{flex: 1}}></View>
      {viewAll && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textViewAll}>{'View all notifications >'}</Text>
        </TouchableOpacity>
      )}
      {markAsRead && (
        <TouchableOpacity onPress={onPress}>
          <View style={{flexDirection: 'row'}}>
            <AppImageSvg
              style={{marginRight: pxScale.wp(5)}}
              source={AppIcon.readMark}
              width={pxScale.wp(18)}
              height={pxScale.wp(18)}
            />
            <Text style={styles.textViewAll}>{'Mark all as read'}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default memo(notificationRow);
