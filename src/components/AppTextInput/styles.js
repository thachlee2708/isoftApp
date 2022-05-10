import {StyleSheet} from 'react-native';
import {fontFamily} from '../../constants';
import {pxScale} from '../../Helpers';
import {colors} from '../../constants';
export default StyleSheet.create({
  container: {},
  label: {
    fontSize: pxScale.fontSize(14),
    fontFamily: fontFamily.InterRegular,
    marginTop: pxScale.hp(20),
    marginBottom: pxScale.hp(10),
  },
  wrapTextInput: {
    marginVertical: pxScale.hp(5),
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
    marginVertical: pxScale.hp(5),
    paddingHorizontal: pxScale.wp(5),
    flexDirection: 'row',
    borderWidth: pxScale.wp(1.8),
    alignItems: 'center',
    borderRadius: pxScale.wp(10),
  },
  wrapTextInputError: {
    paddingHorizontal: pxScale.wp(5),
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
  },
  styleContainerButton: {
    marginTop: pxScale.hp(20),
  },
});
