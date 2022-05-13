import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../../constants';
import {pxScale} from '../../../../Helpers';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.white,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: pxScale.hp(15),
  },

  ApplicationText: {
    color: colors.primary.black,
    fontFamily: fontFamily.InterSemiBold,
    fontSize: pxScale.fontSize(25),
    marginVertical: pxScale.hp(10),
  },
});
