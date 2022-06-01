import {SafeAreaView, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {memo} from 'react';
import AppHeader from 'components/AppHeader';
import AppImageSvg from 'components/AppImageSvg';
import {pxScale} from 'Helpers';
import {screenName} from 'constants';
import styles from './styles';
import {AppIcon} from 'assets/icons';
import {useNavigation} from '@react-navigation/native';
const MoreTab = () => {
  const navigation = useNavigation();
  const navigateToChangePassword = React.useCallback(() => {
    navigation.navigate(screenName.ChangePassword);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader textTitle={'More'} isShowBackIcon={false} />
      <ScrollView style={{marginHorizontal: pxScale.wp(16)}}>
        <>
          <Text style={styles.labelText}>Security</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToChangePassword}>
            <Text style={styles.littleText}>Change password</Text>
            <AppImageSvg
              source={AppIcon.arrowToRight}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
            />
          </TouchableOpacity>
          <Text style={styles.labelText}>About</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.littleText}>Terms of Use</Text>
            <AppImageSvg
              source={AppIcon.arrowToRight}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.littleText}>Privacy Policy</Text>
            <AppImageSvg
              source={AppIcon.arrowToRight}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AppImageSvg
              source={AppIcon.logOutIcon}
              height={pxScale.hp(25)}
              width={pxScale.wp(25)}
            />
            <Text style={styles.logOutText}>Logout</Text>
            <AppImageSvg
              source={AppIcon.arrowToRightGreen}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
            />
          </TouchableOpacity>
          <Text style={styles.littleText}>App version 1.0.1</Text>
          <Text style={styles.littleText}>Powered by iSoft Apps</Text>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
export default memo(MoreTab);
