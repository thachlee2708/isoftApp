import {Platform, StyleSheet} from 'react-native';
import {colors} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  detailsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'android' ? pxScale.hp(30) : null,
  },
  modalContainer: {
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? pxScale.hp(90) : pxScale.hp(140),
    right: pxScale.wp(16),
    zIndex: 1,
  },
  buttonContainer: {
    marginLeft: pxScale.wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'android' ? pxScale.wp(40) : null,
    width: Platform.OS === 'android' ? pxScale.wp(40) : null,
    borderRadius: 90,
    backgroundColor:
      Platform.OS === 'android' ? colors.primary.white : 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 2,
    shadowOpacity: 0.15,
    elevation: 6,
  },
  textContainer: {
    padding: pxScale.wp(10),
    marginRight: pxScale.wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxScale.wp(8),
    backgroundColor: colors.primary.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 2,
    shadowOpacity: 0.15,
    elevation: 6,
  },
  text: {color: colors.primary.black},
});
