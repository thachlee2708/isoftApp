import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../../../../constants';
import {pxScale} from '../../../../../../Helpers';
export default StyleSheet.create({
  container: {
    width: pxScale.wp(320),
    height: pxScale.hp(200),
    marginRight: pxScale.wp(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    elevation: 6,
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    padding: pxScale.hp(15),
    marginVertical: pxScale.hp(15),
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
    fontSize: pxScale.fontSize(16),
  },
  detailsText: {
    marginTop: pxScale.hp(5),
    width: pxScale.wp(290),
    height: pxScale.hp(40),
    color: colors.primary.black,
    fontSize: pxScale.fontSize(16),
  },
  viewMoreText: {
    marginTop: pxScale.hp(10),
    alignSelf: 'flex-end',
    color: colors.primary.green,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(16),
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    backgroundColor: colors.primary.green,
    width: pxScale.wp(10),
    height: pxScale.wp(10),
    marginLeft: pxScale.wp(8),
    borderRadius: pxScale.wp(100),
  },
  inActiveDot: {
    backgroundColor: colors.label['text-D9ECDA'],
    padding: 0,
    width: pxScale.wp(10),
    height: pxScale.wp(10),
    marginLeft: pxScale.wp(8),
    borderRadius: pxScale.wp(100),
  },
});
