import {Platform, StyleSheet} from 'react-native';
import {fontFamily} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  imageHeader: {
    marginTop: pxScale.hp(30),
    height: Platform.OS === 'android' ? pxScale.hp(220) : pxScale.hp(210),
    width: pxScale.wp(440),
  },
  blurContainer: {
    top: Platform.OS === 'android' ? pxScale.hp(40) : pxScale.hp(70),
    borderRadius: pxScale.wp(6),
    overflow: 'hidden',
    width: pxScale.wp(380),
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  blurView: {
    justifyContent: 'center',
    width: '100%',
    height: pxScale.hp(45),
    backgroundColor: 'rgba(0,171,157,0.1)',
  },
  lastLoggedInText: {
    position: 'absolute',
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontFamily: fontFamily.InterRegular,
    color: '#78909C',
    fontSize: pxScale.fontSize(18),
  },
});
