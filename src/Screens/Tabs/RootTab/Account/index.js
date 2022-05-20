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
import {AppImage} from '../../../../assets/images';
import {pxScale} from '../../../../Helpers';
import CardQR from './components/cardQR';
import {dataTest} from './dataTest';
import styles from './styles';
const AccountTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader textTitle={'Account'} isShowBackIcon={false} />
      <ScrollView>
        <ImageBackground
          resizeMode="contain"
          source={AppImage.accountBackground}
          style={styles.imageBackground}>
          <Image
            resizeMode="contain"
            source={dataTest.avataImg}
            style={{borderRadius: 90, marginVertical: pxScale.hp(40)}}
          />
          <Text style={styles.userNameText}>{dataTest.name}</Text>
          <Text style={styles.userIDText}>{dataTest.id}</Text>
          <Text style={styles.userPosition}>{dataTest.Position}</Text>
        </ImageBackground>
        <View
          style={{
            marginHorizontal: pxScale.wp(16),
            paddingBottom: pxScale.hp(100),
          }}>
          <Text style={styles.staffProfileText}>Staff Profile</Text>
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
