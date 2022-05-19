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
import {colors, fontFamily} from '../../../../../constants';
import {pxScale} from '../../../../../Helpers';
import NotificationList from './components/NotificationList';
const BatchNotificationsAction = ({
  isVisible,
  readOrUnread,
  dataList,
  onPressDoneMark,
  checkedAmount,
  onCheckItem,
  onPressCloseModal,
}) => {
  return (
    <Modal statusBarTranslucent visible={isVisible} animationType="fade">
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: colors.primary.green,
            flexDirection: 'row',
            padding: pxScale.wp(20),
            paddingTop: pxScale.hp(50),
            alignItems: 'center',
          }}>
          <Pressable onPress={onPressCloseModal}>
            <AppImageSvg
              source={AppIcon.closeXIcon}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
            />
          </Pressable>

          <Text
            style={{
              marginLeft: pxScale.wp(20),
              fontFamily: fontFamily.InterBold,
              color: colors.primary.white,
              alignSelf: 'center',
              justifyContent: 'center',
              fontSize: pxScale.fontSize(25),
            }}>
            Batch Notifications Action
          </Text>
          <View></View>
        </View>
        <View style={{marginHorizontal: pxScale.wp(16)}}>
          <NotificationList
            readOrUnread={readOrUnread}
            onPressDoneMark={onPressDoneMark}
            checkedAmount={checkedAmount}
            data={dataList}
            isShowCheckbox={true}
            onCheckItem={onCheckItem}
          />
        </View>
      </View>
    </Modal>
  );
};
export default memo(BatchNotificationsAction);
