import {Text, View, ImageBackground} from 'react-native';
import React, {memo} from 'react';
import {AppImage} from '../../../../../../assets/images';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
const headerHome = ({lastLoggedInTime, shouldRenderBlur}) => {
  return (
    <>
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
    </>
  );
};
export default memo(headerHome);
