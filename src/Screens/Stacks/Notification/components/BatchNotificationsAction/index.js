import React, {memo} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {AppIcon} from 'assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import {pxScale} from 'Helpers';
import NotificationList from './components/NotificationList';
import styles from './styles';
const BatchNotificationsAction = ({
  isVisible,
  readOrUnread,
  dataList,
  onDoneMark,
  checkedAmount,
  onPressCloseModal,
}) => {
  return (
    <Modal statusBarTranslucent visible={isVisible} animationType="fade">
      <View style={{flex: 1}}>
        <View style={styles.headerBackground}>
          <Pressable onPress={onPressCloseModal}>
            <AppImageSvg
              source={AppIcon.closeXIcon}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
            />
          </Pressable>

          <Text style={styles.headerText}>Batch Notifications Action</Text>
          <View></View>
        </View>
        <View style={{marginHorizontal: pxScale.wp(16)}}>
          <NotificationList
            readOrUnread={readOrUnread}
            onDoneMark={onDoneMark}
            checkedAmount={checkedAmount}
            data={dataList}
            isShowCheckbox={true}
          />
        </View>
      </View>
    </Modal>
  );
};
export default memo(BatchNotificationsAction);
