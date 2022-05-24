import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../../../../Helpers';
export default StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  noCheck: {
    borderColor: '#979797',
    borderWidth: pxScale.wp(2),
    borderRadius: pxScale.wp(3),
    width: pxScale.wp(25),
    height: pxScale.wp(25),
  },
});
