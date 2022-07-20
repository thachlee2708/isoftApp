import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, {memo} from 'react';
import {DonutChart} from 'react-native-circular-chart';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {formatDay2, formatDay3, pxScale} from 'Helpers';
import styles from './styles';
import {colors, fontFamily} from 'constants';
const CardItemLeave = ({
  leaveTitle,
  sourceIcon,
  colorBorder,
  onPress,
  takenNum,
  balNum,
  balText,
  fromDate,
  toDate,
  percent,
}) => {
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
              paddingVertical: pxScale.wp(5),
              // paddingHorizontal: pxScale.wp(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <DonutChart
                data={[
                  {
                    name: '',
                    value:
                      percent === 0 ? 0.0000001 : percent / (100 - percent),
                    color: colorBorder,
                  },
                  {name: '', value: 1, color: colors.label['text-E4E7F5']},
                ]}
                strokeWidth={pxScale.wp(5)}
                radius={pxScale.wp(28)}
                containerWidth={pxScale.wp(70)}
                containerHeight={pxScale.wp(70)}
                type="butt"
                startAngle={0}
                endAngle={360}
                animationType="slide"
                labelValueStyle={{color: colors.primary.white}}
              />
              <Image
                source={sourceIcon}
                style={{
                  width: pxScale.wp(35),
                  height: pxScale.wp(35),
                  position: 'absolute',
                  top:
                    Platform.OS === 'android' ? pxScale.wp(16) : pxScale.wp(18),
                  left: pxScale.wp(18),
                }}
              />
            </View>
            <View style={{marginLeft: pxScale.wp(10)}}>
              <Text
                style={{
                  fontSize: pxScale.fontSize(18),
                  color: colors.primary.black,
                }}>
                {leaveTitle}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: pxScale.wp(200),
                  marginVertical: pxScale.hp(3),
                }}>
                <Text
                  style={{
                    flex: 1,
                    color: colors.primary.black,
                    fontSize: pxScale.fontSize(18),
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.InterBold,
                      color: colors.primary.black,
                      fontSize: pxScale.fontSize(18),
                    }}>
                    {takenNum}
                  </Text>{' '}
                  Taken
                </Text>
                <Text
                  style={{
                    color: colors.primary.black,
                    fontSize: pxScale.fontSize(18),
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.InterBold,
                      color: colors.primary.black,
                    }}>
                    {balNum}
                  </Text>{' '}
                  {balText}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AppImageSvg
                  source={AppIcon.iconGreyCalendar}
                  height={pxScale.hp(16)}
                  width={pxScale.wp(16)}
                />
                <Text
                  style={{
                    marginLeft: pxScale.wp(5),
                    fontSize: pxScale.fontSize(16),
                  }}>
                  {formatDay3(fromDate)} to {formatDay3(toDate)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default memo(CardItemLeave);
