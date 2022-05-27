import {Platform} from 'react-native';
import {pxScale} from '../../../../Helpers';
import {StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {StatusBar} from 'react-native';
import {colors, fontFamily} from '../../../../constants';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary.white,
    marginTop:
      Platform.OS === 'ios' && isIphoneX()
        ? pxScale.hp(44)
        : Platform.OS === 'ios' && !isIphoneX()
        ? pxScale.hp(20)
        : StatusBar.currentHeight,
  },
  scrollContainer: {
    marginBottom: Platform.OS === 'ios' ? pxScale.hp(550) : pxScale.hp(600),
  },
  titleText: {
    marginTop: pxScale.hp(20),
    fontFamily: fontFamily.InterBold,
    fontSize: pxScale.fontSize(20),
    color: colors.primary.black,
  },
});