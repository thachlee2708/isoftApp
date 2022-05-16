import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {AppImage} from '../../../../assets/images';
import AppImageSvg from '../../../../components/AppImageSvg';
import styles from './styles';
import {AppIcon} from '../../../../assets/icons';
import {pxScale} from '../../../../Helpers';
import {colors, fontFamily, screenName} from '../../../../constants';
import AppButton from '../../../../components/AppButton';
import AppHeader from '../../../../components/AppHeader';
const FirstTimeLogin = () => {
  const navigation = useNavigation();
  const navigateToStaffAccess = React.useCallback(() => {
    navigation.navigate(screenName.StaffAccess, {isReload: Math.random()});
  }, [navigation]);
  return (
    <>
      <View>
        <ImageBackground
          source={AppImage.firstTimeLogin}
          style={styles.imageBackground}
          resizeMode="stretch">
          <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Powered by </Text>
              <AppImageSvg
                source={AppIcon.isoftIcon}
                height={pxScale.hp(31)}
                width={pxScale.wp(62.16)}
              />
            </View>
            <View style={styles.frontIconContainer}>
              <AppImageSvg
                source={AppIcon.iconIsoftNoText}
                height={pxScale.hp(330)}
                width={pxScale.wp(234)}
              />
            </View>
            <Text
              style={{
                fontSize: pxScale.fontSize(26),
                fontFamily: 'Inter-Bold',
                marginTop: pxScale.hp(50),
              }}>
              Welcome
            </Text>
            <Text
              style={{
                fontSize: pxScale.fontSize(20),
                fontFamily: fontFamily.InterRegular,
                marginTop: pxScale.hp(10),
              }}>
              It’s great to have you.
            </Text>
            <AppButton
              styleContainer={styles.getStartedButton}
              buttonText="Get started"
              onPress={navigateToStaffAccess}
            />
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};
export default React.memo(FirstTimeLogin);
