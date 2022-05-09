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
const AppInput = ({
  label,
  placeholder,
  disabled,
  isEmail,
  isPassword,
  isRequired,
}) => {
  const [text, setText] = React.useState('');
  const [validText, setValidText] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isPassHide, setIsPassHide] = React.useState(isPassword ? true : false);
  const [active, setActive] = React.useState(false);
  const checkText = React.useCallback(() => {
    if (isRequired) {
      checkRequired();
    }
    if (isEmail) {
      checkEmail();
    }
    if (isPassword) {
      checkPassword();
    }
  }, [text, checkEmail, checkPassword, checkRequired]);
  const checkEmail = () => {
    if (
      text.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
    ) {
      setValidText(true);
    } else {
      setValidText(false);
      setErrorMessage('This email is invalid');
    }
  };
  const checkPassword = () => {};
  const checkRequired = () => {
    if (text.length === 0) {
      setErrorMessage(label + ' is required');
    }
  };
  const onPressHidePass = () => {
    isPassHide ? setIsPassHide(false) : setIsPassHide(true);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View
        style={
          !validText
            ? styles.wrapTextInputError
            : active
            ? styles.wrapTextInputActive
            : disabled
            ? styles.wrapTextInputdisabled
            : styles.wrapTextInput
        }>
        <AppImageSvg
          source={AppIcon.companyCodeIcon}
          height={pxScale.hp(18)}
          width={pxScale.wp(20)}
        />
        <TextInput
          disabled={disabled}
          onFocus={setActive(true)}
          onChangeText={setText}
          placeholder={placeholder}
          style={styles.textInput}
          onEndEditing={checkText}
          secureTextEntry={isPassHide}
        />
        <TouchableOpacity onPress={onPressHidePass}>
          <AppImageSvg
            source={isPassHide ? AppIcon.eye_gray : AppIcon.eye_close_gray}
            height={pxScale.hp(18)}
            width={pxScale.wp(20)}
          />
        </TouchableOpacity>
      </View>
      {!validText && <Text>{errorMessage}</Text>}
    </View>
  );
};
AppInput.defaultProps = {
  label: 'Label',
  disabled: false,
};
export default React.memo(AppInput);
