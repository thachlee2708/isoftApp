import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {AppImage} from 'assets/images';
import {pxScale} from 'Helpers';
import {AppIcon} from '../../../../../../../../../../assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import styles from './styles';
import {colors} from '../../../../../../../../../../constants';

const LeavesTaken = ({listLeaveTaken}) => {
  const renderItem = React.useCallback(item => {
    return (
      <View
        style={{
          paddingBottom: pxScale.hp(10),
          paddingHorizontal: pxScale.hp(5),
        }}>
        <View style={styles.wrap}>
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                paddingVertical: pxScale.wp(8),
                paddingHorizontal: pxScale.wp(10),
                flexDirection: 'row',
                alignItems: 'center',
                borderLeftWidth: pxScale.wp(3),
                borderColor: ['BFL', '2nd - AL', 'AL'].includes(item.type)
                  ? colors.primary.green
                  : colors.label['text-EF6C00'],
              }}>
              <Text style={[styles.text, {flex: 1}]}>{item.name}</Text>
              <View>
                <Text
                  style={[
                    styles.text,
                    {
                      color: ['BFL', '2nd - AL', 'AL'].includes(item.type)
                        ? colors.primary.green
                        : colors.label['text-EF6C00'],
                    },
                  ]}>
                  {item.type}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  });
  return (
    <View style={{marginTop: pxScale.hp(20)}}>
      {listLeaveTaken?.length === 0 && (
        <View style={{alignItems: 'center'}}>
          <Image
            source={AppImage.calendarEmpty}
            style={{height: pxScale.hp(100), width: pxScale.hp(100)}}
          />
          <Text style={{marginTop: pxScale.hp(10)}}>
            No leaves taken for this week
          </Text>
        </View>
      )}
      {listLeaveTaken?.length > 0 && listLeaveTaken.map(renderItem)}
    </View>
  );
};
export default React.memo(LeavesTaken);
