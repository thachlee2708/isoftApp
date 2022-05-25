import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../../../Helpers';
export default StyleSheet.create({
  blurContainer: {
    top: Platform.OS === 'android' ? pxScale.hp(40) : pxScale.hp(70),
    borderRadius: pxScale.wp(6),
    overflow: 'hidden',
    width: pxScale.wp(380),
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  blurView: {
    justifyContent: 'center',
    width: '100%',
    height: pxScale.hp(45),
    backgroundColor: 'rgba(0,171,157,0.1)',
  },
});
