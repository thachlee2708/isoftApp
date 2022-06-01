import {StyleSheet} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  container: {marginVertical: pxScale.hp(10)},
  textContainer: {
    borderWidth: 1,
    borderColor: colors.primary.green,
    borderRadius: pxScale.wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: pxScale.wp(10),
    padding: pxScale.wp(10),
    width: pxScale.wp(90),
  },
  text: {fontSize: pxScale.fontSize(18), fontFamily: fontFamily.InterRegular},
});
