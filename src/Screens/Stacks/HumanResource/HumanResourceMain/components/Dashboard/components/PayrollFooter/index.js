import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {pxScale} from '../../../../../../../../Helpers';
import AppImageSvg from '../../../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../../../assets/icons';
import {fontFamily} from '../../../../../../../../constants';
import {colors} from '../../../../../../../../constants';
import {AppImage} from '../../../../../../../../assets/images';
const PayrollFooter = () => {
  return (
    <View
      style={{
        marginHorizontal: pxScale.wp(10),
        marginVertical: pxScale.hp(20),
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: pxScale.hp(30),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppImageSvg
          source={AppIcon.iconDollar}
          height={pxScale.hp(16)}
          width={pxScale.wp(16)}
        />
        <Text
          style={{
            flex: 1,
            fontFamily: fontFamily.InterBold,
            color: colors.primary.green,
            marginHorizontal: pxScale.wp(10),
          }}>
          Payroll Summary
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.primary.green,
              marginHorizontal: pxScale.wp(10),
            }}>
            View more
          </Text>
          <AppImageSvg
            source={AppIcon.arrowToRightGreen}
            height={pxScale.hp(13)}
            width={pxScale.wp(13)}
          />
        </View>
      </View>
      <Text>Year to Date Summary</Text>
      <TouchableOpacity>
        <View
          style={{
            marginTop: pxScale.hp(10),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: pxScale.wp(0.5),
            padding: pxScale.wp(10),
            borderRadius: pxScale.wp(5),
          }}>
          <Text style={{flex: 1}}>{'2021'}</Text>
          <AppImageSvg
            source={AppIcon.iconCalendar}
            height={pxScale.hp(16)}
            width={pxScale.wp(16)}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: pxScale.hp(20),
        }}>
        <Text style={{flex: 1}}>Total Salary</Text>
        <AppImageSvg
          source={AppIcon.greenEye}
          height={pxScale.hp(25)}
          width={pxScale.wp(25)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: pxScale.hp(30),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppImageSvg
          source={AppIcon.iconDollar}
          height={pxScale.hp(16)}
          width={pxScale.wp(16)}
        />
        <Text
          style={{
            flex: 1,
            fontFamily: fontFamily.InterBold,
            color: colors.primary.green,
            marginHorizontal: pxScale.wp(10),
          }}>
          {'0.00'}
        </Text>
      </View>
      <Text>Payslip in past 6 months</Text>
      <Image
        source={AppImage.wallet}
        style={{
          height: pxScale.hp(200),
          width: pxScale.wp(200),
          alignSelf: 'center',
          marginBottom: pxScale.hp(20),
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
        }}>
        No rerords found
      </Text>
    </View>
  );
};
export default React.memo(PayrollFooter);
