import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../../../../../constants';
import {pxScale} from '../../../../../../../Helpers';
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
  footerContainer: {
    paddingTop: pxScale.hp(15),
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  markButtonContainer: {
    padding: 10,
    borderRadius: pxScale.wp(9),
    backgroundColor: '#E1F3F1',
  },
  bottomTextLeft: {
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(16),
  },
  bottomTextRight: {
    color: colors.primary.green,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(18),
  },
});
