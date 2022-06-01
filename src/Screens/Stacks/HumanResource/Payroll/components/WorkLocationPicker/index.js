import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {pxScale} from '../../../../../../Helpers';
import {colors} from '../../../../../../constants';
import AppImageSvg from '../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../assets/icons';
const WorkLocationPicker = ({
  pickedWorkLocation,
  onPressToogleModal,
  pickedYear,
}) => {
  return (
    <View style={{marginVertical: pxScale.hp(10)}}>
      <Text>Work Location</Text>
      <View style={{flexDirection: 'row'}}>
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
        <View style={{flex: 1}}></View>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.primary.green}}>
              View {'Y' + pickedYear.toString().substr(-2)}
            </Text>
            <AppImageSvg
              source={AppIcon.arrowToRightGreen}
              height={pxScale.hp(15)}
              width={pxScale.wp(15)}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default React.memo(WorkLocationPicker);
