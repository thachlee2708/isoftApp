import {Platform, StyleSheet} from 'react-native';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Platform.OS === 'android' ? pxScale.hp(15) : 0,
  },
});
