import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const AppButton = ({buttonText, onPress, disabled, styleContainer}) => {
  return (
    <SafeAreaView style={styleContainer}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={disabled ? styles.containerDisabled : styles.container}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
AppButton.defaultProps = {
  buttonText: 'buttonText',
  disabled: false,
};
AppButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
};
export default React.memo(AppButton);
