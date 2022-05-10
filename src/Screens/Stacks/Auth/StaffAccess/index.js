import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppHeader from '../../../../components/AppHeader';
import {AppImage} from '../../../../assets/images';
import {pxScale} from '../../../../Helpers';
import AppImageSvg from '../../../../components/AppImageSvg';
import {AppIcon} from '../../../../assets/icons';
import AppButton from '../../../../components/AppButton';
import styles from './styles';
import AppTextInput from '../../../../components/AppTextInput';
import {screenName} from '../../../../constants';
const StaffAccess = () => {
  const [companyCode, setCompanyCode] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const navigateToPDPAAgree = React.useCallback(() => {
    navigation.navigate(screenName.PDPAAgree);
  }, [navigation]);
  const navigateToResetPassword = React.useCallback(() => {
    navigation.navigate(screenName.ResetPassword);
  }, [navigation]);
  return (
    <SafeAreaView>
      <AppHeader textTitle={'Login'} onpressBackIcon={onGoBack} />
      <Image
        source={AppImage.lockAndTree}
        style={{
          height: pxScale.hp(227.05),
          width: pxScale.wp(349.95),
          alignSelf: 'center',
        }}
      />
      <View style={styles.container}>
        <AppTextInput
          label={'Company Code'}
          leftIconSource={AppIcon.companyCodeIcon}
          placeholder="Enter Company Code"
          textInputProps={{
            value: companyCode,
            onChangeText: setCompanyCode,
          }}
        />
        <AppTextInput
          label={'Username'}
          leftIconSource={AppIcon.userIcon}
          placeholder="Enter Username"
          textInputProps={{
            value: userName,
            onChangeText: setUserName,
          }}
        />
        <TouchableOpacity onPress={navigateToResetPassword}>
          <Text
            style={[
              styles.titleInput,
              {textDecorationLine: 'underline', fontSize: pxScale.fontSize(12)},
            ]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <AppButton
          disabled={
            companyCode.length === 0 || userName.length === 0 ? true : false
          }
          onPress={navigateToPDPAAgree}
          buttonText="Login"
          styleContainer={styles.styleContainerButton}
        />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(StaffAccess);
