import {StyleSheet} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: pxScale.wp(10),
  },
  titleText: {
    maxWidth: pxScale.wp(330),
    maxHeight: pxScale.hp(60),
    color: colors.primary.black,
    fontSize: pxScale.fontSize(18),
    marginLeft: pxScale.wp(15),
  },
});
