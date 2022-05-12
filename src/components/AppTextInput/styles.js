import {StyleSheet} from 'react-native';
import {fontFamily} from '../../constants';
import {pxScale} from '../../Helpers';
import {colors} from '../../constants';
export default StyleSheet.create({
  container: {},
  label: {
    color: colors.primary.black,
    fontSize: pxScale.fontSize(18),
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
  wrapTextInputdisabled: {
    paddingHorizontal: pxScale.wp(5),
    flexDirection: 'row',
    borderWidth: pxScale.wp(1),
    alignItems: 'center',
    borderRadius: pxScale.wp(10),
    backgroundColor: colors.disabledInput,
  },
  wrapTextInputActive: {
    paddingHorizontal: pxScale.wp(5),
    flexDirection: 'row',
    borderWidth: pxScale.wp(1.8),
    alignItems: 'center',
    borderRadius: pxScale.wp(10),
  },
  wrapTextInputError: {
    flexDirection: 'row',
    borderWidth: pxScale.wp(1),
    borderColor: colors.label['text-EF5350'],
    alignItems: 'center',
    borderRadius: pxScale.wp(10),
  },
  textInput: {
    flex: 1,
    fontFamily: fontFamily.InterRegular,
    fontSize: pxScale.fontSize(18),
    color: colors.primary.black,
  },
  styleContainerButton: {
    marginTop: pxScale.hp(20),
  },
});
