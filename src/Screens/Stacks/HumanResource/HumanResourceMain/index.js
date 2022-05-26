import {Animated, Platform, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import HeaderHumanResource from './components/HeaderHumanResource';
import {pxScale} from '../../../../Helpers';
import {isIphoneX} from 'react-native-iphone-x-helper';
import styles from './styles';
import {colors, fontFamily} from '../../../../constants';
import Dashboard from './components/Dashboard';
const HumanResourceMain = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, pxScale.hp(50), pxScale.hp(100)],
    outputRange: [
      0,
      pxScale.hp(isIphoneX() ? -50 : -30),
      pxScale.hp(isIphoneX() ? -100 : -80),
    ],
    extrapolate: 'clamp',
  });
  const scrollViewRef = React.useRef();
  const onScrollEndDrag = React.useCallback(e => {
    const y = e.nativeEvent.contentOffset.y;
    if (y <= 0) {
      return;
    }
    if (y < pxScale.hp(100)) {
      scrollViewRef.current?.scrollTo({
        x: 0,
        y: pxScale.hp(100),
        animated: true,
      });
    }
  }, []);
  return (
    <View style={styles.container}>
      <HeaderHumanResource scrollY={scrollY} />
      <View>
        <Animated.ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScrollEndDrag={onScrollEndDrag}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          style={[
            styles.scrollContainer,
            {
              transform: [
                {
                  translateY,
                },
              ],
            },
          ]}>
          <View
            style={{
              marginHorizontal: pxScale.wp(16),
              marginTop: pxScale.hp(20),
            }}>
            <Text style={styles.titleText}>Dashboard</Text>
            <Dashboard />
            <Text style={styles.titleText}>Approval</Text>
            <Text style={styles.titleText}>Announcement</Text>
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
};
export default React.memo(HumanResourceMain);
