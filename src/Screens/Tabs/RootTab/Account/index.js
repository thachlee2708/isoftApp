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
import CardQR from './components/cardQR';
import {dataTest} from './dataTest';
const AccountTab = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary.white,
      }}>
      <AppHeader textTitle={'Account'} isShowBackIcon={false} />
      <ScrollView>
        <ImageBackground
          resizeMode="contain"
          source={AppImage.accountBackground}
          style={{
            width: pxScale.wp(600),
            height: pxScale.hp(418),
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={dataTest.avataImg}
            style={{borderRadius: 90, marginVertical: pxScale.hp(40)}}
          />
          <Text
            style={{
              color: colors.primary.black,
              marginVertical: pxScale.hp(10),
              fontFamily: fontFamily.InterBold,
              fontSize: pxScale.fontSize(20),
            }}>
            {dataTest.name}
          </Text>
          <Text
            style={{
              color: colors.primary.black,
              fontFamily: fontFamily.InterRegular,
              fontSize: pxScale.fontSize(18),
            }}>
            {dataTest.id}
          </Text>
          <Text
            style={{
              color: colors.primary.black,
              fontFamily: fontFamily.InterRegular,
              fontSize: pxScale.fontSize(20),
            }}>
            {dataTest.Position}
          </Text>
        </ImageBackground>
        <View style={{marginHorizontal: pxScale.wp(16)}}>
          <Text
            style={{
              fontFamily: fontFamily.InterSemiBold,
              fontSize: pxScale.fontSize(20),
              color: colors.primary.black,
            }}>
            Staff Profile
          </Text>
          <CardQR
            sourceIcon={dataTest.iconStaff}
            textTitle={'Staff QR'}
            sourceQR={dataTest.staffQR}
          />
          <CardQR
            sourceIcon={dataTest.iconVCard}
            textTitle={'VCard QR'}
            sourceQR={dataTest.VCardQR}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default memo(AccountTab);
