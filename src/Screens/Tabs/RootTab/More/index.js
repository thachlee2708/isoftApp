import {
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {memo} from 'react';
import AppHeader from '../../../../components/AppHeader';
import AppImageSvg from '../../../../components/AppImageSvg';
import {AppImage} from '../../../../assets/images';
import {pxScale} from '../../../../Helpers';
import {colors, fontFamily} from '../../../../constants';
const MoreTab = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary.white,
      }}>
      <AppHeader textTitle={'More'} isShowBackIcon={false} />
      <ScrollView style={{marginHorizontal: pxScale.wp(16)}}>
        <>
          <Text>Security</Text>
          <TouchableOpacity>
            <Text>Change password</Text>
          </TouchableOpacity>
          <Text>About</Text>
          <TouchableOpacity>
            <Text>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
          <Text>App version 1.0.1</Text>
          <Text>Powered by iSoft Apps</Text>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
export default memo(MoreTab);
