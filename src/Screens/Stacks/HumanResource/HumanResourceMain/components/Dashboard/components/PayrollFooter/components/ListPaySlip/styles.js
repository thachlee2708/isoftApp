import {StyleSheet} from 'react-native';
import {pxScale} from 'Helpers';
import {colors} from 'constants';
export default StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    marginTop: pxScale.hp(15),
    paddingBotttom: pxScale.hp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0.5,
    shadowOpacity: 0.08,
    elevation: 5,
  },
  text: {color: colors.primary.black, flex: 1, fontSize: pxScale.fontSize(18)},
});
