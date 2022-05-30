import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {pxScale} from '../../../../../../Helpers';
import {colors} from '../../../../../../constants';
import AppImageSvg from '../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../assets/icons';
const WorkLocationPicker = ({pickedWorkLocation, onPressToogleModal}) => {
  return (
    <View>
      <Text>Work Location</Text>
      <TouchableOpacity onPress={onPressToogleModal}>
        <View
          style={{
            flexDirection: 'row',
            padding: pxScale.wp(10),
            borderBottomWidth: 1,
            borderBottomColor: colors.primary.green,
            width: pxScale.wp(130),
          }}>
          <Text style={{fontSize: pxScale.fontSize(18), flex: 1}}>
            {pickedWorkLocation}
          </Text>
          <AppImageSvg
            source={AppIcon.arrowToBottom}
            height={pxScale.hp(20)}
            width={pxScale.wp(20)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(WorkLocationPicker);
