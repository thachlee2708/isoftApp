import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppImageSvg from '../AppImageSvg';
import {AppIcon} from '../../assets/icons';
import {pxScale} from '../../Helpers';
import styles from './styles';
import {colors} from '../../constants';
const AppInput = ({
  textInputProps,
  label,
  placeholder,
  disabled,
  leftIconSource,
  secureTextEntry,
  errorMessage,
  isValidText,
  checkValidText,
}) => {
  const [active, setActive] = React.useState(false);
  const [eyeIcon, setEyeIcon] = React.useState(AppIcon.eye_gray);
  const [isPassHide, setIsPassHide] = React.useState(
    secureTextEntry ? true : false,
  );
  const onPressHidePass = React.useCallback(
    isPassHide => () => {
      isPassHide ? setIsPassHide(false) : setIsPassHide(true);
      isPassHide
        ? setEyeIcon(AppIcon.eye_close_gray)
        : setEyeIcon(AppIcon.eye_gray);
    },
    [setIsPassHide, setEyeIcon],
  );
  const onEndEditing = React.useCallback(() => {
    setActive(false);
    checkValidText ? checkValidText() : null;
  }, [setActive, checkValidText]);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={
          !isValidText
            ? styles.wrapTextInputError
            : active
            ? styles.wrapTextInputActive
            : disabled
            ? styles.wrapTextInputdisabled
            : styles.wrapTextInput
        }>
        <AppImageSvg
          source={leftIconSource}
          height={pxScale.hp(18)}
          width={pxScale.wp(20)}
        />
        <TextInput
          {...textInputProps}
          disabled={disabled}
          onFocus={() => setActive(true)}
          onEndEditing={onEndEditing}
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={isPassHide}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={onPressHidePass(isPassHide)}>
            <AppImageSvg
              source={eyeIcon}
              height={pxScale.hp(18)}
              width={pxScale.wp(20)}
            />
          </TouchableOpacity>
        )}
      </View>
      {!isValidText && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppImageSvg
            source={AppIcon.errorIcon}
            height={pxScale.hp(16)}
            width={pxScale.wp(16)}
          />
          <Text style={{color: '#EF5350'}}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};
AppInput.defaultProps = {
  label: 'Label',
  disabled: false,
  leftIconSource: AppIcon.userIcon,
  errorMessage: '',
  secureTextEntry: false,
  isValidText: true,
  checkValidText: null,
};
export default React.memo(AppInput);
