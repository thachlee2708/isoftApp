import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants';
import {pxScale} from '../../../../../Helpers';
export default StyleSheet.create({
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.label['text-43A047'],
    width: 350,
    height: 50,
    alignSelf: 'center',
    top: pxScale.hp(130),
    borderRadius: 10,
  },
});
