import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNQRGenerator from 'rn-qr-generator';

const {HelloTest} = NativeModules;
const cardQR = ({setShouldRenderBlur}) => {
  const [valueOfQrCode, setValueOfQrCode] = React.useState(null);
  const onChoiceImage = React.useCallback(
    res => {
      if (res?.assets?.length) {
        Platform.OS === 'android' && setShouldRenderBlur(true);
        RNQRGenerator.detect({
          uri: res.assets[0].uri,
        })
          .then(response => {
            const {values} = response;
            console.log('ValueOf QRCode', values);
            setValueOfQrCode(values);
          })
          .catch(error => console.log('Cannot detect QR code in image', error));
      } else {
        console.log('resLength=0', res);
        return;
      }
    },
    [setValueOfQrCode],
  );
  const onPressScanQr = React.useCallback(
    async option => {
      try {
        Platform.OS === 'android' && setShouldRenderBlur(false);
        launchImageLibrary(option, onChoiceImage);
      } catch (e) {
        console.log('error requestOpenCam', e);
      }
    },
    [onChoiceImage],
  );

  const testNativeModule = () => {
    HelloTest.sayHello('Le Ngoc Thach', (err, message) => {
      if (err) return console.log(err);
      console.log(message);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={testNativeModule}>
        <View style={styles.buttonContainer}>
          <AppImageSvg
            source={AppIcon.scanQR}
            height={pxScale.hp(28)}
            width={pxScale.wp(28)}
          />
          <Text style={styles.text}>Scan QR</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPressScanQr({mediaType: 'photo'})}>
        <View style={styles.buttonContainer}>
          <AppImageSvg
            source={AppIcon.staffQR}
            height={pxScale.hp(28)}
            width={pxScale.wp(28)}
          />
          <Text style={styles.text}>Staff QR</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default memo(cardQR);
