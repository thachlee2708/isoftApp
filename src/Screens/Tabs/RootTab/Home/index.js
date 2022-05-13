import {SafeAreaView, Text, View, BackHandler, ScrollView} from 'react-native';
import React, {memo} from 'react';
import {AppImage} from '../../../../assets/images';
import {pxScale} from '../../../../Helpers';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {AppIcon} from '../../../../assets/icons';
import HeaderHome from './commponents/headerHome';
import NotificationRow from './commponents/notificationRow';
import CardApplications from './commponents/cardApplications';
import CardQR from './commponents/cardQR';
import ListCard from './commponents/listCard';
import dataTest from './dataTest';
const HomeTab = () => {
  const navigation = useNavigation();
  const [shouldRenderBlur, setShouldRenderBlur] = React.useState(
    Platform.OS === 'android' ? false : true,
  );
  React.useEffect(() => {
    setTimeout(() => setShouldRenderBlur(true), 50);
  });
  const backAction = () => {
    setShouldRenderBlur(false);
    navigation.goBack();
    return true;
  };
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  return (
    <ScrollView style={styles.container}>
      <HeaderHome
        lastLoggedInTime={'21 Oct 2021 10:44:20'}
        shouldRenderBlur={shouldRenderBlur}
      />
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <CardQR />
        <NotificationRow newNumber={4} />
        <ListCard data={dataTest} />
        <Text style={styles.ApplicationText}>Applications</Text>
        <CardApplications />
      </View>
    </ScrollView>
  );
};
export default memo(HomeTab);
