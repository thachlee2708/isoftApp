import {StyleSheet} from 'react-native';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  arrowContainer: {
    borderWidth: pxScale.wp(0.5),
    width: pxScale.wp(30),
    height: pxScale.wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxScale.wp(60),
  },
});
