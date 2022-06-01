import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import {pxScale} from 'Helpers';
import {colors} from 'constants';
export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? pxScale.hp(40) : 0,
    backgroundColor: colors.primary.white,
    height: pxScale.hp(926),
  },
});
