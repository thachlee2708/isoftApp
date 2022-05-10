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
import {fontFamily, screenName} from '../../../../constants';
import {pxScale} from '../../../../Helpers';
import AppButton from '../../../../components/AppButton';
const PDPAAgree = () => {
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const navigateToRootTab = React.useCallback(() => {
    navigation.navigate(screenName.RootTab);
  }, [navigation]);
  return (
    <SafeAreaView>
      <AppHeader textTitle={'Terms'} onpressBackIcon={onGoBack} />
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <Text
          style={{
            fontFamily: fontFamily.InterBold,
            fontSize: pxScale.fontSize(20),
            textDecorationLine: 'underline',
          }}>
          DATA PROTECTION POLICY FOR EMPLOYEES AND JOB APPLICANTS
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.InterRegular,
            fontSize: pxScale.fontSize(20),
            marginBottom: pxScale.hp(150),
          }}>
          This Data Protection Policy (“Policy”) sets out the basis upon which
          The Company (“we”, “us” or “our”) may collect, use, disclose or
          otherwise process personal data of employees and job applicants in
          accordance with the Personal Data Protection Act (“PDPA”) and European
          Union’s General Data Protection Regulation (the “GDPR”). This Policy
          applies to personal data in our possession or under our control,
          including personal data in the possession of organizations which we
          have engaged to collect, use, disclose or process personal data for
          our purposes.{'\n'}
          {'\n'}
          <Text
            style={{
              textDecorationLine: 'underline',
            }}>
            APPLICATION OF THIS POLICY{'\n'}
          </Text>
          <Text>
            1. Neque porro quisquam qui dolorem ipsum quia dolor sit amet,
            consectetur,{' '}
            <Text
              style={{
                fontFamily: fontFamily.InterBold,
              }}>
              adipisci velit.
            </Text>
          </Text>
        </Text>
        <AppButton
          buttonText={'I Agree & Continue'}
          onPress={navigateToRootTab}
        />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(PDPAAgree);
