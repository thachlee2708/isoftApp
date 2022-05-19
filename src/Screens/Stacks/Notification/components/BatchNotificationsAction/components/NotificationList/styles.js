import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../../constants';
import {pxScale} from '../../../../../../../Helpers';
export default StyleSheet.create({
  titleText: {
    maxWidth: pxScale.wp(330),
    maxHeight: pxScale.hp(60),
    color: colors.primary.black,
    fontSize: pxScale.fontSize(18),
    marginLeft: pxScale.wp(15),
  },
});
