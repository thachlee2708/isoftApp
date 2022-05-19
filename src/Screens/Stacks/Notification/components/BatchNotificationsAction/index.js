import React, {memo} from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppIcon} from '../../../../../assets/icons';
import AppImageSvg from '../../../../../components/AppImageSvg';
import {colors} from '../../../../../constants';
import {pxScale} from '../../../../../Helpers';
import NotificationList from '../NotificationList';
const BatchNotificationsAction = ({
  isVisible,
  readOrUnread,
  dataList,
  onPressDoneMark,
  onCheckItem,
  onPressCloseModal,
}) => {
  return (
    <Modal
      statusBarTranslucent
      transparent
      visible={isVisible}
      animationType="fade"
      style={{
        width: pxScale.wp(428),
        marginTop: Platform.OS === 'ios' ? pxScale.hp(40) : 0,
        backgroundColor: colors.primary.white,
        height: pxScale.hp(926),
      }}>
      <View
        style={{backgroundColor: colors.primary.green, flexDirection: 'row'}}>
        <AppImageSvg source={AppIcon.closeXIcon} />
        <Text>Batch Notifications Action</Text>
      </View>
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <NotificationList
          data={dataList}
          isShowCheckbox={true}
          onCheckItem={onCheckItem}
        />
        <View>
          <Text> Selected</Text>
          <Pressable onPress={onPressDoneMark}>
            <Text>Mark as {readOrUnread}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default memo(BatchNotificationsAction);
