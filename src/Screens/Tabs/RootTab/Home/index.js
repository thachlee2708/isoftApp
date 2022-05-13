import {
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  BackHandler,
} from 'react-native';
import React, {memo} from 'react';
import AppHeader from '../../../../components/AppHeader';
import AppImageSvg from '../../../../components/AppImageSvg';
import {AppImage} from '../../../../assets/images';
import {pxScale} from '../../../../Helpers';
import {colors, fontFamily} from '../../../../constants';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import OptionApplications from './commponents/optionApplications';
import {AppIcon} from '../../../../assets/icons';
const HomeTab = () => {
  const navigation = useNavigation();
  const [shouldRenderBlur, setShouldRenderBlur] = React.useState(
    Platform.OS === 'android' ? false : true,
  );
  React.useEffect(() => {
    setTimeout(() => setShouldRenderBlur(true), 50);
  });
  const backAction = () => {
    setShouldRenderBlur(false);
    navigation.goBack();
    return true;
  };
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary.white,
      }}>
      <ImageBackground
        resizeMode="contain"
        source={AppImage.headerHome}
        style={styles.imageHeader}></ImageBackground>
      <View
        style={{
          top: pxScale.hp(45),
          borderRadius: pxScale.wp(6),
          overflow: 'hidden',
          flex: 1,
          width: pxScale.wp(380),
          backgroundColor: 'transparent',
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        {shouldRenderBlur && (
          <BlurView
            blurType={'light'}
            blurAmount={50}
            style={[
              {
                justifyContent: 'center',
                width: '100%',
                height: pxScale.hp(45),
                backgroundColor: 'rgba(0,171,157,0.1)',
              },
            ]}></BlurView>
        )}
        <Text style={styles.lastLoggedInText}>
          Last logged in: 21 Oct 2021 10:44:20
        </Text>
      </View>
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <Text style={styles.ApplicationText}>Applications</Text>
        <View style={styles.optionContainer}>
          <OptionApplications
            titleText={'Human\nResource'}
            sourceImage={AppImage.option1}
            sourceIcon={AppIcon.hrIcon}
          />
          <OptionApplications
            titleText={'POS'}
            sourceImage={AppImage.option2}
            sourceIcon={AppIcon.hrIcon}
          />
        </View>
        <View style={styles.optionContainer}>
          <OptionApplications
            titleText={'Intranet'}
            sourceImage={AppImage.option3}
            sourceIcon={AppIcon.hrIcon}
          />
          <OptionApplications
            titleText={'Forms'}
            sourceImage={AppImage.option4}
            sourceIcon={AppIcon.hrIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default memo(HomeTab);
