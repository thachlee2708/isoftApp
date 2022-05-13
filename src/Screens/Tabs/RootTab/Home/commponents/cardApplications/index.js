import {SafeAreaView, Text, View, BackHandler} from 'react-native';
import React, {memo} from 'react';
import {AppImage} from '../../../../../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import OptionApplications from './components/optionApplications';
import {AppIcon} from '../../../../../../assets/icons';
const cardApplications = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.optionContainer}>
        <OptionApplications
          titleText={'Human\nResource'}
          sourceImage={AppImage.option1}
          sourceIcon={AppIcon.hrIcon}
        />
        <OptionApplications
          titleText={'POS'}
          sourceImage={AppImage.option2}
          sourceIcon={AppIcon.hrIcon}
        />
      </View>
      <View style={styles.optionContainer}>
        <OptionApplications
          titleText={'Intranet'}
          sourceImage={AppImage.option3}
          sourceIcon={AppIcon.hrIcon}
        />
        <OptionApplications
          titleText={'Forms'}
          sourceImage={AppImage.option4}
          sourceIcon={AppIcon.hrIcon}
        />
      </View>
    </>
  );
};
export default memo(cardApplications);
