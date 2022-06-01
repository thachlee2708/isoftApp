import {StyleSheet} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary.white},
  labelText: {
    color: colors.primary.black,
    marginTop: pxScale.hp(30),
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(25),
  },
  button: {
    marginVertical: pxScale.hp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutText: {
    flex: 1,
    marginLeft: pxScale.wp(10),
    color: colors.primary.green,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(25),
    marginVertical: pxScale.hp(30),
  },
  littleText: {
    color: colors.primary.black,
    flex: 1,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(20),
    marginVertical: pxScale.hp(5),
  },
});
