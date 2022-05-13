import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../../../../constants';
import {pxScale} from '../../../../../../Helpers';
export default StyleSheet.create({
  container: {
    marginRight: pxScale.wp(20),
    shadowColor: '#000',
    elevation: 5,
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    padding: pxScale.hp(15),
    marginVertical: pxScale.hp(15),
    marginLeft: pxScale.wp(5),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: pxScale.hp(12),
  },
  titleText: {
    marginLeft: pxScale.wp(10),
    fontFamily: fontFamily.InterMedium,
    color: colors.primary.black,
    fontSize: pxScale.fontSize(20),
  },
  detailsText: {
    marginTop: pxScale.hp(5),
    maxWidth: pxScale.wp(310),
    color: colors.primary.black,
    fontSize: pxScale.fontSize(20),
  },
  viewMoreText: {
    alignSelf: 'flex-end',
    color: colors.primary.green,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(20),
  },
});
