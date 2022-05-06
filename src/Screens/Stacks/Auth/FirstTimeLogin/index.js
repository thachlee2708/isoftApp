import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, ImageBackground, Image, Text} from 'react-native';
import {AppImage} from '../../../../assets/images';
import styles from './styles';
const FirstTimeLogin = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={AppImage.firstTimeLogin}
      style={styles.imageBackground}
      resizeMode="stretch">
      <Text>Powered by </Text>
    </ImageBackground>
  );
};
export default React.memo(FirstTimeLogin);
