import React, {memo} from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import {AppIcon} from '../../../../../assets/icons';
import AppImageSvg from '../../../../../components/AppImageSvg';
import {colors} from '../../../../../constants';
import {pxScale} from '../../../../../Helpers';
import styles from './styles';
const ModalMarkAsRead = ({isVisible, amountNumer, onPress, readOrUnread}) => {
  return (
    <Modal
      statusBarTranslucent
      transparent
      visible={isVisible}
      animationType="fade">
      <Pressable
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          position: 'absolute',
          backgroundColor: colors.label['text-43A047'],
          width: 350,
          height: 50,
          alignSelf: 'center',
          top: pxScale.hp(130),
          borderRadius: 10,
        }}>
        <AppImageSvg
          style={{marginHorizontal: 10}}
          source={AppIcon.iconCheck}
          height={pxScale.hp(30)}
          width={pxScale.hp(30)}
        />
        <Text style={{color: colors.primary.white}}>
          {amountNumer} notifications marked as {readOrUnread}
        </Text>
      </Pressable>
    </Modal>
  );
};
export default memo(ModalMarkAsRead);
