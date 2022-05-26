import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {colors, fontFamily, screenName} from '../../../../../../constants';
import {AppIcon} from '../../../../../../assets/icons';
import AppImageSvg from '../../../../../../components/AppImageSvg';
import {pxScale} from '../../../../../../Helpers';
import {AppImage} from '../../../../../../assets/images';
import styles from './styles';
const HeaderHumanResource = ({scrollY}) => {
  const navigation = useNavigation();
  const [shouldRenderBlur, setshouldRenderBlur] = React.useState(
    Platform.OS === 'ios' ? true : false,
  );
  const iconList = () => [
    {
      name: screenName.Payroll,
      type: screenName.Payroll,
      icon: AppIcon.payroll,
    },
    {
      name: screenName.Leave,
      type: screenName.Leave,
      icon: AppIcon.leave,
    },
    {
      name: screenName.Claim,
      type: screenName.Claim,
      icon: AppIcon.claim,
    },
    {
      name: screenName.Approval,
      type: screenName.Approval,
      icon: AppIcon.approval,
    },
  ];

  const onPressIcon = React.useCallback(
    item => {
      switch (item.type) {
        case screenName.Payroll:
          navigation.navigate(screenName.Payroll);
          break;
        case screenName.Leave:
          navigation.navigate(screenName.Leave);
          break;
        case screenName.Claim:
          navigation.navigate(screenName.Claim);
          break;
        case screenName.Approval:
          navigation.navigate(screenName.Approval);
          break;
        default:
          break;
      }
    },
    [navigation],
  );

  const renderListBigIcon = React.useCallback(
    (item, index) => {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}>
          <TouchableOpacity onPress={onPressIcon(item)}>
            <AppImageSvg
              source={item.icon}
              height={pxScale.hp(50)}
              width={pxScale.hp(50)}
            />
            <Text style={{alignSelf: 'center', color: colors.primary.black}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    },
    [onPressIcon],
  );
  const renderBigHeader = React.useCallback(() => {
    const opacity = scrollY.interpolate({
      inputRange: [0, pxScale.hp(100), pxScale.hp(200)],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
    });
    const translateY = scrollY.interpolate({
      inputRange: [0, pxScale.hp(100), pxScale.hp(200)],
      outputRange: [0, pxScale.hp(-100), pxScale.hp(-200)],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          opacity,
          transform: [{translateY}],
        }}>
        <ImageBackground
          source={AppImage.top_bg_human_resource_main}
          resizeMode="stretch"
          style={{
            top: pxScale.hp(-20),
            width: pxScale.wp(500),
            height: pxScale.hp(250),
          }}>
          <View
            style={{
              width: pxScale.wp(428),
              paddingHorizontal: pxScale.wp(16),
              marginTop: pxScale.hp(70),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.InterRegular,
                fontSize: pxScale.fontSize(16),
                color: colors.primary.black,
              }}>
              Hello,
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.InterBold,
                fontSize: pxScale.fontSize(20),
                color: colors.primary.black,
              }}>
              JONATHAN LIN JUN JIE
            </Text>
            <View
              style={{
                marginTop: pxScale.hp(30),
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: pxScale.wp(16),
              }}>
              {iconList().map(renderListBigIcon)}
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    );
  }, [renderListBigIcon, scrollY]);

  const renderListSmallIcon = React.useCallback(
    (item, index) => {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={onPressIcon(item)}>
            <View
              style={{
                backgroundColor: colors.primary.white,
                padding: pxScale.wp(3),
                borderRadius: pxScale.wp(8),
              }}>
              <AppImageSvg
                source={item.icon}
                height={pxScale.hp(40)}
                width={pxScale.hp(40)}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    },
    [onPressIcon],
  );
  const renderSmallHeader = React.useCallback(() => {
    const opacity = scrollY.interpolate({
      inputRange: [0, pxScale.hp(50), pxScale.hp(100)],
      outputRange: [0, 0.5, 1],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          opacity,
          position: 'absolute',
        }}>
        <ImageBackground
          source={AppImage.top_bg_human_resource_main}
          resizeMode="stretch"
          style={{
            top: pxScale.hp(-20),
            width: pxScale.wp(500),
            height: pxScale.hp(150),
          }}>
          <View
            style={{
              width: pxScale.wp(428),
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: pxScale.wp(32),
              marginTop: pxScale.hp(40),
            }}>
            {iconList().map(renderListSmallIcon)}
          </View>
        </ImageBackground>
      </Animated.View>
    );
  }, [renderListSmallIcon, scrollY]);
  return (
    <View>
      {renderBigHeader()}
      {renderSmallHeader()}
    </View>
  );
};
export default React.memo(HeaderHumanResource);
