import {StyleSheet} from 'react-native';
import {pxScale} from 'Helpers';
import {colors} from 'constants';
import {fontFamily} from '../../../../../../../../../../constants';
export default StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    paddingBotttom: pxScale.hp(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 1,
    shadowOpacity: 0.05,
    elevation: 5,
  },
  text: {
    color: colors.primary.black,
    fontSize: pxScale.fontSize(16),
    paddingHorizontal: pxScale.wp(15),
  },
  triangle: {
    width: pxScale.wp(10),
    borderTopColor: colors.primary.green,
    borderRightWidth: pxScale.wp(15),
    borderRightColor: 'transparent',
    borderLeftWidth: pxScale.wp(15),
    borderLeftColor: 'transparent',
    borderTopWidth: pxScale.wp(15),
  },
  textToolTip: {
    color: colors.primary.white,
    fontSize: pxScale.fontSize(18),
    fontFamily: fontFamily.InterRegular,
  },
});
