import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
const PickerBox = ({arr, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: pxScale.wp(0.5),
          borderRadius: pxScale.wp(3),
          height: pxScale.hp(50),
          width: pxScale.wp(170),
        }}>
        {
          <Text numberOfLines={2} style={{width: pxScale.wp(150)}}>
            {arr.map(item => {
              return item.worklocation + 'x ';
            })}
          </Text>
        }
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
