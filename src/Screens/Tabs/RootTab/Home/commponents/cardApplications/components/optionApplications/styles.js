import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../../../../../Helpers';
export default StyleSheet.create({
  container: {},
  Imagecontainer: {
    flexDirection: 'row',
    height: pxScale.hp(120),
    width: pxScale.wp(190),
    paddingVertical: pxScale.hp(25),
    paddingHorizontal: pxScale.wp(15),
  },
  icon: {},
  text: {flex: 1},
});
