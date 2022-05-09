import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../constants';
import {pxScale} from '../../Helpers';
export default StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    width: pxScale.wp(820),
    height: pxScale.hp(246),
    left: pxScale.wp(-210),
    top: pxScale.hp(-148),
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: pxScale.hp(18),
    marginBottom: pxScale.hp(80),
    marginLeft: pxScale.wp(16),
  },
  titleText: {
    left: pxScale.wp(153),
    fontSize: pxScale.fontSize(20),
    fontFamily: fontFamily.InterBold,
    color: colors.primary.white,
  },
});
