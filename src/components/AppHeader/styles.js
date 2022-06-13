import {StyleSheet} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    width: pxScale.wp(856),
    height: pxScale.hp(240),
    left: pxScale.wp(-240),
    top: pxScale.hp(-150),
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: pxScale.hp(25),
    marginBottom: pxScale.hp(50),
    marginLeft: pxScale.wp(16),
    position: 'absolute',
  },
  titleText: {
    alignSelf: 'center',
    marginTop: pxScale.hp(20),
    fontSize: pxScale.fontSize(25),
    fontFamily: fontFamily.InterBold,
    color: colors.primary.white,
    marginBottom: pxScale.hp(30),
  },
});
