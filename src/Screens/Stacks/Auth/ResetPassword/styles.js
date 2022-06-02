import {StyleSheet} from 'react-native';
import {fontFamily} from 'constants';
import {pxScale} from 'Helpers';
export default StyleSheet.create({
  container: {
    marginHorizontal: pxScale.wp(16),
  },
  titleInput: {
    fontFamily: fontFamily.InterRegular,
    marginTop: pxScale.hp(20),
    marginBottom: pxScale.hp(10),
  },
  wrapTextInput: {
    paddingHorizontal: pxScale.wp(5),
    flexDirection: 'row',
    borderWidth: pxScale.wp(1),
    alignItems: 'center',
    borderRadius: pxScale.wp(10),
  },
  textInput: {
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(18),
  },
  styleContainerButton: {
    marginTop: pxScale.hp(20),
  },
});
