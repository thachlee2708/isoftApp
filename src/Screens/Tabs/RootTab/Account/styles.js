import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../Helpers';
import {colors} from '../../../../constants';
import {fontFamily} from '../../../../constants';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary.white},
  imageBackground: {
    width: pxScale.wp(600),
    height: pxScale.hp(418),
    alignSelf: 'center',
    alignItems: 'center',
  },
  userNameText: {
    color: colors.primary.black,
    marginVertical: pxScale.hp(10),
    fontFamily: fontFamily.InterBold,
    fontSize: pxScale.fontSize(20),
  },
  userIDText: {
    color: colors.primary.black,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(18),
  },
  userPosition: {
    color: colors.primary.black,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(20),
  },
  staffProfileText: {
    fontFamily: fontFamily.InterSemiBold,
    fontSize: pxScale.fontSize(20),
    color: colors.primary.black,
  },
});
