import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants';
import {Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {pxScale} from '../../../../Helpers';
import {StatusBar} from 'react-native';
export default StyleSheet.create({
  container: {
    height: pxScale.hp(926),
    width: pxScale.wp(428),
    backgroundColor: colors.primary.white,
    marginTop:
      Platform.OS === 'ios' && isIphoneX()
        ? pxScale.hp(44)
        : Platform.OS === 'ios' && !isIphoneX()
        ? pxScale.hp(20)
        : StatusBar.currentHeight,
  },
  detailContainer: {
    marginTop: pxScale.hp(30),
    marginHorizontal: pxScale.wp(16),
  },
});
