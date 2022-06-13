import {Platform, StyleSheet} from 'react-native';
import {pxScale} from 'Helpers';
import {colors} from 'constants';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primary.white,
    borderRadius: pxScale.wp(8),
    marginTop: Platform.OS === 'android' ? pxScale.hp(65) : pxScale.hp(25),
    marginRight: pxScale.wp(20),
    padding: pxScale.hp(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.15,
    elevation: 6,
  },
  text: {
    padding: 0,
    marginRight: pxScale.wp(10),
    color: colors.primary.black,
    fontSize: pxScale.fontSize(15),
  },
});
