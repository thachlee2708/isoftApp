import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../constants';
import {pxScale} from '../../Helpers';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxScale.wp(396),
    height: pxScale.hp(55),
    backgroundColor: colors.primary.green,
    borderRadius: pxScale.wp(10),
  },
  containerDisabled: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxScale.wp(396),
    height: pxScale.hp(55),
    backgroundColor: colors.primary.green,
    opacity: 0.4,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: fontFamily.InterBold,
    color: colors.primary.white,
    fontSize: pxScale.fontSize(20),
  },
});
