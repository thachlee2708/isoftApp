import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {formatMoney, pxScale} from '../../../../../../../../Helpers';
import AppImageSvg from '../../../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../../../assets/icons';
import {fontFamily, screenName} from '../../../../../../../../constants';
import {colors} from '../../../../../../../../constants';
import {AppImage} from '../../../../../../../../assets/images';
import YearPickerModal from './components/YearPickerModal';
import SalaryDetails from './components/SalaryDetails';
import ListPaySlip from './components/ListPaySlip';
import {useNavigation} from '@react-navigation/native';
import NoRecordFound from './components/NoRecordFound';
const PayrollFooter = () => {
  const navigation = useNavigation();
  const [randomNum, setRandomNum] = React.useState(0);
  const [stateModal, setStateModal] = React.useState(false);
  const currentYear = new Date().getFullYear();
  const [year, setYear] = React.useState(currentYear);
  const [yearPicked, setYearPicked] = React.useState(currentYear);
  const [isShowSalary, setIsShowSalary] = React.useState(false);
  const onDonePickYear = React.useCallback(() => {
    setYear(yearPicked);
    setStateModal(false);
  }, [setYear, setStateModal, yearPicked, stateModal]);
  const openModal = React.useCallback(() => {
    setRandomNum(Math.random());
    setStateModal(!stateModal);
  }, [setStateModal, stateModal]);
  const navigateToPayroll = React.useCallback(() => {
    navigation.navigate(screenName.Payroll);
  }, [navigation]);
  return (
    <View
      style={{
        marginHorizontal: pxScale.wp(10),
        marginVertical: pxScale.hp(20),
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: pxScale.hp(30),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppImageSvg
          source={AppIcon.iconDollar}
          height={pxScale.hp(16)}
          width={pxScale.wp(16)}
        />
        <Text
          style={{
            flex: 1,
            fontFamily: fontFamily.InterBold,
            color: colors.primary.green,
            marginHorizontal: pxScale.wp(10),
          }}>
          Payroll Summary
        </Text>
        <TouchableOpacity onPress={navigateToPayroll}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.primary.green,
                marginHorizontal: pxScale.wp(10),
              }}>
              View more
            </Text>

            <AppImageSvg
              source={AppIcon.arrowToRightGreen}
              height={pxScale.hp(13)}
              width={pxScale.wp(13)}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{color: colors.primary.black}}>Year to Date Summary</Text>
      <TouchableOpacity onPress={openModal}>
        <View
          style={{
            marginTop: pxScale.hp(10),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: pxScale.wp(0.5),
            padding: pxScale.wp(10),
            borderRadius: pxScale.wp(5),
            color: colors.primary.black,
          }}>
          <Text style={{flex: 1, color: colors.primary.black}}>{year}</Text>
          <AppImageSvg
            source={AppIcon.iconCalendar}
            height={pxScale.hp(16)}
            width={pxScale.wp(16)}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: pxScale.hp(20),
        }}>
        <Text style={{flex: 1, color: colors.primary.black}}>Total Salary</Text>
        <TouchableOpacity onPress={() => setIsShowSalary(!isShowSalary)}>
          <AppImageSvg
            source={!isShowSalary ? AppIcon.greenEye : AppIcon.greenEyeClose}
            height={pxScale.hp(25)}
            width={pxScale.wp(25)}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: pxScale.hp(20),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppImageSvg
          source={AppIcon.iconDollar}
          height={pxScale.hp(16)}
          width={pxScale.wp(16)}
        />
        <TextInput
          editable={false}
          secureTextEntry={isShowSalary}
          style={{
            flex: 1,
            fontFamily: fontFamily.InterBold,
            color: colors.primary.green,
            marginHorizontal: pxScale.wp(10),
          }}>
          {formatMoney(43332.9)}
        </TextInput>
      </View>

      <SalaryDetails isShowSalary={isShowSalary} />

      <Text style={{color: colors.primary.black}}>
        Payslip in past 6 months
      </Text>
      {<ListPaySlip />}
      {/* <NoRecordFound /> */}
      {stateModal && (
        <YearPickerModal
          isVisible={stateModal}
          yearPicked={yearPicked}
          setYearPicked={setYearPicked}
          onPressCancel={() => setStateModal(!stateModal)}
          onPressOK={onDonePickYear}
          reload={randomNum}
        />
      )}
    </View>
  );
};
export default React.memo(PayrollFooter);
