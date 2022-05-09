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
const StaffAccess = () => {
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.goBack();
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
        <Text style={styles.titleInput}>Company Code</Text>
        <View style={styles.wrapTextInput}>
          <AppImageSvg
            source={AppIcon.companyCodeIcon}
            height={pxScale.hp(18)}
            width={pxScale.wp(20)}
          />
          <TextInput
            placeholder="Enter Company Code"
            style={styles.textInput}
          />
        </View>
        <AppTextInput />
        <TouchableOpacity>
          <Text
            style={[
              styles.titleInput,
              {textDecorationLine: 'underline', fontSize: pxScale.fontSize(12)},
            ]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <AppButton
          buttonText="Login"
          styleContainer={styles.styleContainerButton}
        />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(StaffAccess);
