import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const cardQR = () => {
  const [img, setImg] = React.useState({
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
  });
  const [data, setData] = React.useState(null);
  const onChoiceImage = React.useCallback(
    res => {
      if (res?.assets?.length) {
        setImg({uri: res.assets[0].uri});
        RNQRGenerator.detect({
          uri: res.assets[0].uri,
        })
          .then(response => {
            const {values} = response; // Array of detected QR code values. Empty if nothing found.
            console.log(values);
          })
          .catch(error => console.log('Cannot detect QR code in image', error));
      } else {
        return;
      }
    },
    [setImg],
  );
  const onPressScanQr = React.useCallback(
    async option => {
      try {
        launchImageLibrary(option, onChoiceImage);
      } catch (e) {
        console.log('error requestOpenCam', e);
      }
    },
    [onChoiceImage],
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1}>
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
