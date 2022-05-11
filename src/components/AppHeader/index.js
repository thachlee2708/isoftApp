import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AppImage} from '../../assets/images';
import AppImageSvg from '../AppImageSvg';
import styles from './styles';
import {AppIcon} from '../../assets/icons';
import {pxScale} from '../../Helpers';
import {colors, fontFamily} from '../../constants';
const AppHeader = ({textTitle, onpressBackIcon, isShowBackIcon}) => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: colors.primary.white}}>
      <ImageBackground
        source={AppImage.headerBackground}
        resizeMode="contain"
        style={styles.imageBackground}></ImageBackground>
      <View style={styles.contentContainer}>
        {isShowBackIcon && (
          <TouchableOpacity onPress={onpressBackIcon}>
            <AppImageSvg
              source={AppIcon.iconBack}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}></AppImageSvg>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.titleText}>{textTitle}</Text>
    </View>
  );
};
AppHeader.defaultProps = {
  textTitle: 'textTitle',
  isShowBackIcon: true,
};
export default React.memo(AppHeader);
