import {StyleSheet} from 'react-native';
import {pxScale} from 'Helpers';
import {colors} from 'constants';
import {fontFamily} from 'constants';
export default StyleSheet.create({
  tabHighlightsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(10),
  },
  tabPicked: {
    marginRight: pxScale.wp(20),
    borderColor: colors.primary.green,
    borderBottomWidth: pxScale.hp(2),
  },
  textPicked: {
    color: colors.primary.green,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(17),
    marginBottom: pxScale.hp(2),
  },
  tab: {marginRight: pxScale.wp(20)},
  text: {
    color: '#c0c0c0',
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(17),
  },
});
