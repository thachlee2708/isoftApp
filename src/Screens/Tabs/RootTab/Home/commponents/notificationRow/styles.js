import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../../../../constants';
import {pxScale} from '../../../../../../Helpers';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    marginVertical: pxScale.hp(10),
  },
  textNewContainer: {
    paddingVertical: pxScale.wp(4),
    paddingHorizontal: pxScale.wp(15),
    backgroundColor: '#CCEEEB',
    borderRadius: pxScale.wp(15),
    alignItems: 'center',
    marginLeft: pxScale.wp(5),
  },
  textNew: {
    color: colors.primary.green,
    fontSize: pxScale.fontSize(20),
    textAlignVertical: 'center',
  },
  textViewAll: {
    color: colors.primary.green,
    fontSize: pxScale.fontSize(20),
  },
});
