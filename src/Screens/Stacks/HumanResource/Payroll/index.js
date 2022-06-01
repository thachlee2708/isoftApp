import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import AppHeader from 'components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import PayrollTabs from './components/PayrollTabs';
import styles from './styles';
import MyPayslipTabs from './components/MyPayslipTabs';
import YTabs from './components/YTabs';
import WorkLocationPicker from './components/WorkLocationPicker';
import WorkLocationModal from './components/WorkLocationModal';
import NoRecordFound from '../HumanResourceMain/components/Dashboard/components/PayrollFooter/components/NoRecordFound';
const Payroll = () => {
  const [pickedTabPayroll, setPickedTabPayroll] = React.useState('My Payslip');
  const [pickedTabPayslip, setPickedTabPayslip] = React.useState('Payslip');
  const [pickedYear, setpickedYear] = React.useState(2022);
  const [stateModalWorkLocation, setStateModalWorkLocation] =
    React.useState(false);
  const [workLocation, setWorkLocation] = React.useState('CMM');
  const navigation = useNavigation();
  const onPressBackScreen = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const onPressItemWorkLocation = React.useCallback(
    item => {
      setWorkLocation(item);
      setStateModalWorkLocation(false);
    },
    [setWorkLocation],
  );
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader textTitle={'Payroll'} onpressBackIcon={onPressBackScreen} />
      <View style={styles.detailContainer}>
        <PayrollTabs
          pickedTab={pickedTabPayroll}
          onPressItem={setPickedTabPayroll}
        />
        {pickedTabPayroll === 'My Payslip' && (
          <MyPayslipTabs
            pickedPayslipTab={pickedTabPayslip}
            onPressItem={setPickedTabPayslip}
          />
        )}

        <YTabs pickedYear={pickedYear} onPressItem={setpickedYear} />

        {[2022, 2020, 2019].includes(pickedYear) && (
          <WorkLocationPicker
            pickedYear={pickedYear}
            pickedWorkLocation={workLocation}
            onPressToogleModal={() => setStateModalWorkLocation(true)}
          />
        )}
      </View>
      {stateModalWorkLocation && (
        <WorkLocationModal
          isVisible={stateModalWorkLocation}
          onPressClose={() => setStateModalWorkLocation(false)}
          onPressItem={onPressItemWorkLocation}
          pickedItem={workLocation}
        />
      )}
      {pickedYear === 2021 && <NoRecordFound />}
    </SafeAreaView>
  );
};
export default React.memo(Payroll);
