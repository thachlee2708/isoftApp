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
const ResetPassword = () => {
  const [companyCode, setCompanyCode] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [resetPassword, setResetPassword] = React.useState(false);
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.navigate(screenName.StaffAccess, {isReload: Math.random()});
  }, [navigation]);
  const checkValidMail = React.useCallback(
    email => {
      setEmail(email);
      email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
        ? setIsValidEmail(true)
        : setIsValidEmail(false);
    },
    [setIsValidEmail],
  );
  const onPressResetPasword = React.useCallback(() => {
    setResetPassword(true);
  }, [setResetPassword]);
  return (
    <SafeAreaView>
      <AppHeader textTitle={'Reset Password'} onpressBackIcon={onGoBack} />
      <AppImageSvg
        style={{alignSelf: 'center', marginBottom: pxScale.hp(15)}}
        source={AppIcon.resetPassImage}
        height={pxScale.hp(227.05)}
        width={pxScale.wp(349.95)}
      />
      <View style={styles.container}>
        {!resetPassword && (
          <>
            <AppTextInput
              errorMessage={'This email is invalid'}
              checkValidText={() => checkValidMail(email)}
              isValidText={isValidEmail}
              label={'Email'}
              leftIconSource={AppIcon.email}
              placeholder="Enter Email"
              textInputProps={{
                value: email,
                onChangeText: setEmail,
              }}
            />
            <AppTextInput
              label={'Company Code'}
              leftIconSource={AppIcon.companyCodeIcon}
              placeholder="Enter Company Code"
              textInputProps={{
                value: companyCode,
                onChangeText: setCompanyCode,
              }}
            />
            <AppButton
              onPress={onPressResetPasword}
              disabled={
                companyCode.length === 0 || email.length === 0 || !isValidEmail
                  ? true
                  : false
              }
              buttonText="Reset Password"
              styleContainer={styles.styleContainerButton}
            />
          </>
        )}

        {resetPassword && (
          <>
            <Text>Please check your inbox for password reset email.</Text>
            <AppButton
              onPress={onGoBack}
              buttonText="Login"
              styleContainer={styles.styleContainerButton}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
export default React.memo(ResetPassword);
