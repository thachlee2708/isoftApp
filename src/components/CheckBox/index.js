import {View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import AppImageSvg from 'components/AppImageSvg';
import {pxScale} from 'Helpers';
import {AppIcon} from 'assets/icons';
const CheckBox = ({onValueChange, initialValue, changeValue}) => {
  const [value, setValue] = React.useState(initialValue);
  const onPress = React.useCallback(() => {
    setValue(!value);
    return onValueChange(!value);
  }, [value, setValue, onValueChange]);
  React.useEffect(() => {
    setValue(changeValue);
  }, [changeValue]);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {!value && <View style={styles.noCheck} />}
        {value && (
          <AppImageSvg
            source={AppIcon.iconCheckBox}
            width={pxScale.wp(18)}
            height={pxScale.wp(18)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default memo(CheckBox);
