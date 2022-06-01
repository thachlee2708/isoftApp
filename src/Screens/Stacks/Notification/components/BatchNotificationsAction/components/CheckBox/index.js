import {View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import AppImageSvg from 'components/AppImageSvg';
import {pxScale} from 'Helpers';
import {AppIcon} from 'assets/icons';
const CheckBox = ({onValueChange}) => {
  const [value, setValue] = React.useState(false);
  const onPress = React.useCallback(() => {
    setValue(!value);
    return onValueChange(!value);
  }, [value, setValue, onValueChange]);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {!value && <View style={styles.noCheck} />}
        {value && (
          <AppImageSvg
            source={AppIcon.iconCheckBox}
            width={pxScale.wp(25)}
            height={pxScale.wp(25)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default memo(CheckBox);
