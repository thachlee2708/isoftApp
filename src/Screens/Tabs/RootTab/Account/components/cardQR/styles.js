import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../../../Helpers';
import {colors} from '../../../../../../constants';
export default StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    marginTop: pxScale.hp(15),
    paddingBotttom: pxScale.hp(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
