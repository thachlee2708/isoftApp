import {Text, View, ImageBackground, Platform} from 'react-native';
import React, {memo} from 'react';
import {AppImage} from 'assets/images';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import {pxScale} from 'Helpers';
const headerHome = ({lastLoggedInTime, shouldRenderBlur}) => {
  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? pxScale.hp(240) : pxScale.hp(220),
        alignItems: 'center',
      }}>
      <ImageBackground
        resizeMode="contain"
        source={AppImage.headerHome}
        style={styles.imageHeader}></ImageBackground>
      <View style={styles.blurContainer}>
        {shouldRenderBlur && (
          <BlurView
            blurType={'light'}
            blurAmount={50}
            style={styles.blurView}></BlurView>
        )}
        <Text style={styles.lastLoggedInText}>
          Last logged in: {lastLoggedInTime}
        </Text>
      </View>
    </View>
  );
};
export default memo(headerHome);
