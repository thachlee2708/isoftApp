import {StyleSheet} from 'react-native';
import {fontFamily} from '../../../../../../constants';
import {pxScale} from '../../../../../../Helpers';
import {colors} from '../../../../../../constants';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    marginVertical: pxScale.hp(15),
    marginHorizontal: pxScale.wp(10),
    padding: pxScale.hp(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.84,
    shadowOpacity: 1,
    elevation: 8,
  },
  text: {
    color: colors.primary.black,
  },
});
