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
import {colors, screenName} from '../../../../constants';
const ChangePassword = () => {
  const [curentPassword, setRurentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView>
      <AppHeader textTitle={'Change Password'} onpressBackIcon={onGoBack} />
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
          secureTextEntry={true}
          label={'Current Password'}
          leftIconSource={AppIcon.lockIcon}
          placeholder="Enter Current Password"
          textInputProps={{
            value: curentPassword,
            onChangeText: setRurentPassword,
          }}
        />
        <AppTextInput
          secureTextEntry={true}
          label={'New Password'}
          leftIconSource={AppIcon.lockIcon}
          placeholder="Enter New Password"
          textInputProps={{
            value: newPassword,
            onChangeText: setNewPassword,
          }}
        />
        <AppTextInput
          secureTextEntry={true}
          label={'Confirm New Password'}
          leftIconSource={AppIcon.lockIcon}
          placeholder="Enter Confirm New Password"
          textInputProps={{
            value: confirmPassword,
            onChangeText: setConfirmPassword,
          }}
        />
        <AppButton
          disabled={
            curentPassword.length === 0 ||
            newPassword.length === 0 ||
            confirmPassword.length === 0
              ? true
              : false
          }
          buttonText="Change Password"
          styleContainer={styles.styleContainerButton}
        />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(ChangePassword);
