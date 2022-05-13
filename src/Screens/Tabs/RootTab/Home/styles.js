import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontFamily} from '../../../../constants';
import {pxScale} from '../../../../Helpers';
export default StyleSheet.create({
  container: {alignItems: 'center'},
  imageHeader: {
    height: pxScale.hp(280),
    width: pxScale.wp(428),
  },
  lastLoggedInText: {
    position: 'absolute',
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontFamily: fontFamily.InterRegular,
    color: '#78909C',
    fontSize: pxScale.fontSize(18),
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
