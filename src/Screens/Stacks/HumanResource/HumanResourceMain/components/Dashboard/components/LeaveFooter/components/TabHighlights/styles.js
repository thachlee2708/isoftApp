import {StyleSheet} from 'react-native';
import {pxScale} from 'Helpers';
import {colors} from 'constants';
export default StyleSheet.create({
  tabHighlightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(10),
  },
  shawdowHighlights: {
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(10),
    marginTop: pxScale.hp(10),
    paddingBotttom: pxScale.hp(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 1,
    shadowOpacity: 0.08,
    elevation: 5,
  },
  tabPicked: {
    backgroundColor: colors.primary.green,
    width: pxScale.wp(185),
    height: pxScale.hp(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxScale.wp(10),
  },
  textPicked: {color: colors.primary.white},
  tab: {
    backgroundColor: colors.primary.white,
    width: pxScale.wp(150),
    height: pxScale.hp(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxScale.wp(10),
  },
  text: {color: colors.primary.green},
});
