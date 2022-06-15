import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
import {colors} from '../../../../../../../../../../constants';
const PickerBox = ({arr, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingLeft: pxScale.wp(10),
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: pxScale.wp(0.5),
          borderColor: colors.primary.black,
          borderRadius: pxScale.wp(3),
          height: pxScale.hp(50),
          width: pxScale.wp(170),
        }}>
        <View style={{flexDirection: 'row'}}>
          {arr.map((item, index) => {
            if (index < 2) {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: pxScale.wp(5),
                  }}>
                  <Text numberOfLines={2}>{item.worklocation + ' '}</Text>
                  <AppImageSvg
                    source={AppIcon.iconXClose}
                    height={pxScale.hp(8)}
                    width={pxScale.wp(8)}
                  />
                </View>
              );
            }
          })}
        </View>
        <View style={{flex: 1}} />
        <AppImageSvg
          style={{marginRight: pxScale.wp(10)}}
          source={AppIcon.arrowToBottom}
          height={pxScale.hp(15)}
          width={pxScale.wp(15)}
        />
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(PickerBox);
