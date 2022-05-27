import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {formatMoney, pxScale} from '../../../../../../../../../../Helpers';
import AppImageSvg from '../../../../../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../../../../../assets/icons';
import {fontFamily} from '../../../../../../../../../../constants';
import {colors} from '../../../../../../../../../../constants';
const SalaryDetails = ({isShowSalary}) => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: pxScale.hp(5),
        }}>
        <Text
          style={{
            flex: 1,
            fontFamily: fontFamily.InterRegular,
          }}>
          CMM - Salary
        </Text>
        <AppImageSvg
          source={AppIcon.iconDollar}
          height={pxScale.hp(13)}
          width={pxScale.wp(13)}
        />
        <TextInput
          secureTextEntry={isShowSalary}
          style={{
            fontFamily: fontFamily.InterRegular,
            color: colors.primary.green,
            marginLeft: pxScale.wp(2),
          }}>
          {formatMoney(33332.9)}
        </TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: pxScale.hp(30),
        }}>
        <Text
          style={{
            flex: 1,
            fontFamily: fontFamily.InterRegular,
          }}>
          CMM - Salary
        </Text>
        <AppImageSvg
          source={AppIcon.iconDollar}
          height={pxScale.hp(13)}
          width={pxScale.wp(13)}
        />
        <TextInput
          secureTextEntry={isShowSalary}
          style={{
            fontFamily: fontFamily.InterRegular,
            color: colors.primary.green,
            marginLeft: pxScale.wp(2),
          }}>
          {formatMoney(10000)}
        </TextInput>
      </View>
    </View>
  );
};
export default React.memo(SalaryDetails);