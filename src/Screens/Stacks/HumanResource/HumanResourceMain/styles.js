import {Platform} from 'react-native';
import {pxScale} from '../../../../Helpers';
import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../../constants';
export default StyleSheet.create({
  container: {backgroundColor: colors.primary.white},
  scrollContainer: {marginBottom: pxScale.hp(440)},
  titleText: {fontFamily: fontFamily.InterBold, fontSize: pxScale.fontSize(20)},
});
