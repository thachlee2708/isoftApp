import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../../../../../../../Helpers';
import {colors} from '../../../../../../../../../../constants';
export default StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    marginBottom: pxScale.hp(15),
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
  text: {color: colors.primary.black},
});
