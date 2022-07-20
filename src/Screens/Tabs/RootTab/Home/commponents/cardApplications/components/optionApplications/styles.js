import {StyleSheet} from 'react-native';
import {colors} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  container: {marginBottom: pxScale.hp(10)},
  Imagecontainer: {
    flexDirection: 'row',
    height: pxScale.hp(100),
    width: pxScale.wp(190),
    paddingVertical: pxScale.hp(25),
    paddingHorizontal: pxScale.wp(15),
  },
  icon: {},
  text: {flex: 1, color: colors.primary.black, fontSize: pxScale.fontSize(16)},
});
