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
  },
  optionImage: {},
});
