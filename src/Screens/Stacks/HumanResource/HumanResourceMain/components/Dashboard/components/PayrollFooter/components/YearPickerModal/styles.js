import {StyleSheet} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  bottomText: {
    marginLeft: pxScale.wp(20),
    color: 'blue',
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(18),
  },
});
