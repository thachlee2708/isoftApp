import {
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {memo} from 'react';
import AppHeader from '../../../../components/AppHeader';
import AppImageSvg from '../../../../components/AppImageSvg';
import {AppImage} from '../../../../assets/images';
import {pxScale} from '../../../../Helpers';
import {colors, fontFamily} from '../../../../constants';
const HomeTab = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary.white,
      }}>
      <AppHeader textTitle={'Home'} isShowBackIcon={false} />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};
export default memo(HomeTab);
