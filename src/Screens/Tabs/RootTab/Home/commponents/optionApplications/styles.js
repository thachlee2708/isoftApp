import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontFamily} from '../../../../constants';
import {pxScale} from '../../../../../../Helpers';
export default StyleSheet.create({
  container: {alignSelf: 'stretch'},
  Imagecontainer: {
    flexDirection: 'row',
    height: pxScale.hp(140),
    width: pxScale.wp(190),
    padding: pxScale.wp(20),
  },
  icon: {},
  text: {flex: 1},
});
