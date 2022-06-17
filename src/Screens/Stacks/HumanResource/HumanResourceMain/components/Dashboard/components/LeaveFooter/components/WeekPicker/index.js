import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {formatDay3, pxScale} from 'Helpers';
import styles from './styles';
const WeekPicker = ({time, onPressLeft, onPressRight}) => {
  var d = new Date(time);
  d.setDate(d.getDate() - 7);
  return (
    <View
      style={{
        marginTop: pxScale.hp(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={onPressLeft}>
        <View style={styles.arrowContainer}>
          <AppImageSvg
            style={{transform: [{rotate: '180deg'}]}}
            source={AppIcon.arrowToRight}
            height={pxScale.hp(15)}
            width={pxScale.wp(15)}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: pxScale.wp(0.5),
          height: pxScale.hp(50),
          width: pxScale.wp(280),
          justifyContent: 'center',
          borderRadius: pxScale.wp(5),
        }}>
        <Text
          style={{marginRight: pxScale.wp(10), fontSize: pxScale.fontSize(18)}}>
          {formatDay3(d)} to {formatDay3(time)}
        </Text>
        <AppImageSvg
          source={AppIcon.iconCalendar}
          height={pxScale.hp(20)}
          width={pxScale.wp(20)}
        />
      </View>
      <TouchableOpacity onPress={onPressRight}>
        <View style={styles.arrowContainer}>
          <AppImageSvg
            source={AppIcon.arrowToRight}
            height={pxScale.hp(15)}
            width={pxScale.wp(15)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(WeekPicker);
