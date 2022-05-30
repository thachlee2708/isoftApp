import {Animated, Platform, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import HeaderHumanResource from './components/HeaderHumanResource';
import {pxScale} from '../../../../Helpers';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {colors, fontFamily, screenName} from '../../../../constants';
import Dashboard from './components/Dashboard';
import AppHeader from '../../../../components/AppHeader';
import Approval from './components/Approval';
import Announcement from './components/Announcement';
const HumanResourceMain = () => {
  const navigation = useNavigation();
  const onPressBack = React.useCallback(() => {
    navigation.navigate(screenName.HomeScreen, {isReload: Math.random()});
  }, [navigation]);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, pxScale.hp(50), pxScale.hp(100)],
    outputRange: [
      0,
      pxScale.hp(isIphoneX() ? -65 : -65),
      pxScale.hp(isIphoneX() ? -130 : -130),
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
    <SafeAreaView style={styles.container}>
      <View style={{zIndex: 1}}>
        <AppHeader textTitle={'Human Resource'} onpressBackIcon={onPressBack} />
      </View>
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
              marginTop: pxScale.hp(90),
              marginHorizontal: pxScale.wp(16),
              marginBottom: pxScale.hp(15),
            }}>
            <Text style={styles.titleText}>Dashboard</Text>
            <Dashboard />

            <Text style={styles.titleText}>Approval</Text>
            <Approval />

            <Text style={styles.titleText}>Announcement</Text>
            <Announcement />
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(HumanResourceMain);
