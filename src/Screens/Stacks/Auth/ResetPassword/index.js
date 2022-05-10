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
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const navigateToPDPAAgree = React.useCallback(() => {
    navigation.navigate(screenName.PDPAAgree);
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
  return (
    <SafeAreaView>
      <AppHeader textTitle={'Reset Password'} onpressBackIcon={onGoBack} />
      <AppImageSvg
        source={AppIcon.resetPassImage}
        height={pxScale.hp(227.05)}
        width={pxScale.wp(349.95)}
      />
      <View style={styles.container}>
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
          disabled={
            companyCode.length === 0 || email.length === 0 ? true : false
          }
          buttonText="Reset Password"
          styleContainer={styles.styleContainerButton}
        />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(ResetPassword);
