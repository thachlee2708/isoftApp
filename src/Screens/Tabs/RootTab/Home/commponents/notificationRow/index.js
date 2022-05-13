import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {AppImage} from '../../../../../../assets/images';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import AppImageSvg from '../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../assets/icons';
import {pxScale} from '../../../../../../Helpers';
const notificationRow = ({onPress, newNumber}) => {
  return (
    <View style={styles.container}>
      <AppImageSvg
        source={AppIcon.greenNotificationIcon}
        height={pxScale.hp(22)}
        width={pxScale.wp(18)}
      />
      <View style={styles.textNewContainer}>
        <Text style={styles.textNew}>{newNumber} new</Text>
      </View>
      <View style={{flex: 1}}></View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textViewAll}>{'View all notifications >'}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default memo(notificationRow);
