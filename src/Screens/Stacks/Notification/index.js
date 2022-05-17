import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import {colors} from '../../../constants';
import {pxScale} from '../../../Helpers';
import NotificationRow from '../../Tabs/RootTab/Home/commponents/NotificationRow';
import dataNotificationTest from '../../Tabs/RootTab/Home/dataTest/dataNotificationTest';
const Notification = () => {
  const navigation = useNavigation();
  const onGoBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary.white,
        height: pxScale.hp(926),
      }}>
      <AppHeader textTitle={'Notifications'} onpressBackIcon={onGoBack} />
      <View style={{marginHorizontal: pxScale.wp(16)}}>
        <NotificationRow
          newNumber={dataNotificationTest.length}
          markAsRead={true}
        />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Notification);
