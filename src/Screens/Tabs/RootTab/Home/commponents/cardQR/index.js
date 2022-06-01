import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
const cardQR = () => {
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
      <TouchableOpacity activeOpacity={1}>
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
