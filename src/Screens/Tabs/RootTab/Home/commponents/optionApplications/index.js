import React, {memo} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import AppImageSvg from '../../../../../../components/AppImageSvg';
import {pxScale} from '../../../../../../Helpers';
import styles from './styles';
const optionApplication = ({
  sourceImage,
  titleText,
  sourceIcon,
  onPress,
  styleContainer,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styleContainer, styles.container]}>
        <ImageBackground
          resizeMode="contain"
          source={sourceImage}
          style={styles.Imagecontainer}>
          <Text style={styles.text}>{titleText}</Text>
          <AppImageSvg
            style={styles.icon}
            source={sourceIcon}
            height={pxScale.hp(22)}
            width={pxScale.wp(18)}
          />
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
export default memo(optionApplication);
