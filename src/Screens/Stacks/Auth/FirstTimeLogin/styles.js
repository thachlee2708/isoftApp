import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  fontFamily,
  colors,
} from '../../../../constants';
import {pxScale} from '../../../../Helpers';
export default StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  imageBackground: {
    width: pxScale.wp(428),
    height: pxScale.hp(926),
  },
  headerContainer: {
    marginTop: pxScale.hp(0),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fontFamily.InterRegular,
    textAlignVertical: 'center',
    fontSize: pxScale.fontSize(14),
  },
  frontIconContainer: {
    marginTop: pxScale.hp(80),
  },
  getStartedButton: {
    marginTop: pxScale.hp(151),
  },
});
