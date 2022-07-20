import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
import {colors, fontFamily} from 'constants';
import styles from './styles';
const LeaveDisclaimer = () => {
  const [numberOfLines, setNumberOfLines] = React.useState(2);
  const position = useRef(new Animated.Value(0)).current;
  const heightTransform = useRef(new Animated.Value(pxScale.hp(0))).current;
  const moveDown = () => {
    Animated.timing(position, {
      toValue: pxScale.hp(20),
      duration: 800,
    }).start();
  };
  const scaleUp = () => {
    Animated.timing(heightTransform, {
      toValue: pxScale.hp(20),
      duration: 800,
    }).start();
  };
  React.useEffect(() => {
    moveDown();
    scaleUp();
  });
  return (
    <View style={styles.wrap}>
      <View
        style={{
          borderLeftColor: '#C0C0C0',
          borderLeftWidth: pxScale.wp(2),
          paddingTop: pxScale.wp(10),
          paddingHorizontal: pxScale.wp(10),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: pxScale.hp(10),
          }}>
          <AppImageSvg
            source={AppIcon.iconExclamationMark}
            height={pxScale.hp(30)}
            width={pxScale.hp(30)}
          />
          <Text
            style={{
              marginLeft: pxScale.wp(10),
              fontSize: pxScale.fontSize(18),
              fontFamily: fontFamily.InterBold,
              color: colors.primary.black,
            }}>
            Leave Disclaimer
          </Text>
          <View style={{flex: 1}} />
          <AppImageSvg
            source={AppIcon.arrowToBottom}
            height={pxScale.hp(20)}
            width={pxScale.hp(20)}
          />
        </View>
        <View>
          <Text
            numberOfLines={numberOfLines}
            style={{fontSize: pxScale.fontSize(17)}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non
          </Text>
        </View>
        <Animated.View style={{height: heightTransform}} />
        <TouchableOpacity
          onPress={() => setNumberOfLines(!numberOfLines ? 2 : null)}>
          <Animated.View
            style={[
              {
                alignItems: 'center',
                top: pxScale.hp(-30),
                backgroundColor: colors.primary.white,
                height: pxScale.hp(45),
                justifyContent: 'center',
              },
              {transform: [{translateY: position}]},
            ]}>
            <Text
              style={{
                color: colors.primary.green,
                fontSize: pxScale.fontSize(20),
                fontFamily: fontFamily.InterBold,
              }}>
              Read More
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default React.memo(LeaveDisclaimer);
