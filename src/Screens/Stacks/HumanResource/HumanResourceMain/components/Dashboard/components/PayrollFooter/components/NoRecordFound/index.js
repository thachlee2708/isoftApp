import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {pxScale} from '../../../../../../../../../../Helpers';
import {colors} from '../../../../../../../../../../constants';
import {AppImage} from '../../../../../../../../../../assets/images';
const NoRecordFound = () => {
  return (
    <View style={{}}>
      {
        <Image
          source={AppImage.wallet}
          style={{
            height: pxScale.hp(200),
            width: pxScale.wp(200),
            alignSelf: 'center',
            marginBottom: pxScale.hp(20),
          }}
        />
      }
      <Text
        style={{
          alignSelf: 'center',
          color: colors.primary.black,
        }}>
        No rerords found
      </Text>
    </View>
  );
};
export default React.memo(NoRecordFound);
