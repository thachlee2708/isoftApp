import React, {memo} from 'react';
import {Text, Modal, Pressable} from 'react-native';
import {AppIcon} from 'assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import {pxScale} from 'Helpers';
import styles from './styles';
const ModalMarkAsRead = ({isVisible, amountNumer, onPress, readOrUnread}) => {
  return (
    <Modal
      statusBarTranslucent
      transparent
      visible={isVisible}
      animationType="fade">
      <Pressable onPress={onPress} style={styles.modalContainer}>
        <AppImageSvg
          style={{marginHorizontal: 10}}
          source={AppIcon.iconCheck}
          height={pxScale.hp(30)}
          width={pxScale.hp(30)}
        />
        <Text style={styles.text}>
          {amountNumer} notifications marked as {readOrUnread}
        </Text>
      </Pressable>
    </Modal>
  );
};
export default memo(ModalMarkAsRead);
