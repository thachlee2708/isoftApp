import {StyleSheet, StatusBar} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../../constants';
import {pxScale} from '../../../../Helpers';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: pxScale.wp(428),
    height: pxScale.hp(926),
  },
});
