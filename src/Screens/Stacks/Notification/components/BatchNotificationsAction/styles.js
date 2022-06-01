import {StyleSheet} from 'react-native';
import {colors} from 'constants';
import {pxScale} from 'Helpers';
import {fontFamily} from 'constants';
export default StyleSheet.create({
  headerBackground: {
    backgroundColor: colors.primary.green,
    flexDirection: 'row',
    padding: pxScale.wp(20),
    paddingTop: pxScale.hp(50),
    alignItems: 'center',
  },
  headerText: {
    marginLeft: pxScale.wp(20),
    fontFamily: fontFamily.InterBold,
    color: colors.primary.white,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: pxScale.fontSize(25),
  },
});
