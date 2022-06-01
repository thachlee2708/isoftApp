import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import AppImageSvg from '../../../../../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../../../../../assets/icons';
import {formatDay2, pxScale} from '../../../../../../../../../../Helpers';
import styles from './styles';
import {formatDay} from '../../../../../../../../../../Helpers';
const CardItemDate = ({date, dateType, onPress}) => {
  return (
    <SafeAreaView
      style={{
        paddingBottom: pxScale.hp(10),
        paddingHorizontal: pxScale.hp(5),
      }}>
      <View style={styles.wrap}>
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
          <View
            style={{
              paddingVertical: pxScale.wp(15),
              paddingHorizontal: pxScale.wp(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AppImageSvg
              style={{position: 'absolute'}}
              source={AppIcon.line.primary}
              height={pxScale.hp(50)}
              width={pxScale.wp(4)}
            />
            <View style={{flex: 1}}>
              <Text style={styles.text}>{formatDay2(date)}</Text>
            </View>
            <Text style={styles.text}>{dateType}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default memo(CardItemDate);
