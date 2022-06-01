import {StyleSheet} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.label['text-43A047'],
    width: pxScale.wp(390),
    height: pxScale.hp(60),
    alignSelf: 'center',
    top: pxScale.hp(130),
    borderRadius: 10,
  },
  text: {
    color: colors.primary.white,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(20),
  },
});
