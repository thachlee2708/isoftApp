import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {AppImage} from 'assets/images';
import {colors} from 'constants';
import {pxScale} from 'Helpers';
import CardItemDate from './components/CardItemDate';
import CardItemLeave from './components/CardItemLeave';
import AppImageSvg from 'components/AppImageSvg';
import CheckBox from 'components/CheckBox';
import {AppIcon} from 'assets/icons';
import PickerBox from './components/PickerBox';
import {fontFamily} from 'constants';
import WeekPicker from './components/WeekPicker';
import LeavesTaken from './components/LeavesTaken';
import {leavesTakenData, listWorkLocation, listMajor} from './dataTest';
import MultiWorkLocationModal from './components/MultiWorkLocationModal';
import styles from './styles';
const LeaveFooter = () => {
  const [checkViewAllEmployee, setCheckViewAllEmployee] = React.useState(false);
  const [stateModalWorkLocation, setStateModalWorkLocation] =
    React.useState(false);
  const [selectedWorkLocation, setSelectedWorkLocation] = React.useState([]);
  const [checkedWorkLocation, setCheckedWorkLocation] = React.useState([]);

  const [stateModalMajor, setStateModalMajor] = React.useState(false);
  const [selectedMajor, setSelectedMajor] = React.useState([]);
  const [checkedMajor, setCheckedMajor] = React.useState([]);

  const onCheckViewAllEmployee = React.useCallback(value => {
    setCheckViewAllEmployee(value);
  });
  const upcomingLeave = [
    {date: '2021-12-13', type: 'Annual Leave'},
    {date: '2021-12-14', type: 'Annual Leave'},
  ];
  const upcomingPublicHoliday = [{date: '2021-12-25', type: 'Christmas Day'}];
  const leaveHighlight = [
    {
      leaveTitle: 'Annual Leave',
      sourceIcon: AppImage.balloon,
      colorBorder: colors.primary.green,
      takenNum: 3,
      balText: 'Bal. (0.00BFL)',
      balNum: 11,
      fromDate: '2021-12-01',
      toDate: '2022-07-30',
      percent: 80,
    },
    {
      leaveTitle: 'Sick Leave',
      sourceIcon: AppImage.pharmacy,
      colorBorder: colors.label['text-EF5350'],
      takenNum: 6,
      balNum: 3,
      balText: 'Bal.',
      fromDate: '2021-07-21',
      toDate: '2022-12-31',
      percent: 35,
    },
    {
      leaveTitle: 'Child Care Leave',
      sourceIcon: AppImage.baby,
      colorBorder: colors.label['text-BA68C8'],
      takenNum: 3,
      balNum: 6,
      balText: 'Bal.',
      fromDate: '2021-07-21',
      toDate: '2022-12-31',
      percent: 65,
    },
  ];
  const [currentDate, setCurrentDate] = React.useState(
    new Date().toDateString(),
  );
  const [tabPicked, setTabPicked] = React.useState('highlights');

  const switchTab = React.useCallback(() => {
    tabPicked === 'highlights'
      ? setTabPicked('details')
      : setTabPicked('highlights');
  }, [setTabPicked, tabPicked]);

  const BackToPreviousWeek = React.useCallback(() => {
    var previous7day = new Date(currentDate);
    previous7day.setDate(previous7day.getDate() - 8);
    setCurrentDate(previous7day);
  }, [setCurrentDate, currentDate]);
  const MoveToNextWeek = React.useCallback(() => {
    var next7d = new Date(currentDate);
    next7d.setDate(next7d.getDate() + 8);
    setCurrentDate(next7d);
  }, [setCurrentDate, currentDate]);

  const [listLeaveTaken, setListLeaveTaken] = React.useState(leavesTakenData);
  React.useEffect(() => {
    var d = new Date(currentDate);
    d.setDate(d.getDate() + 1);
    const previous7day = new Date(d);
    previous7day.setDate(previous7day.getDate() - 7);
    const arr = leavesTakenData.filter(item => {
      return (
        new Date(item.date).toISOString().split('T')[0] >=
          previous7day.toISOString().split('T')[0] &&
        new Date(item.date).toISOString().split('T')[0] <=
          d.toISOString().split('T')[0]
      );
    });
    setListLeaveTaken(arr);
  }, [currentDate]);
  return (
    <View
      style={{
        marginHorizontal: pxScale.wp(16),
        paddingVertical: pxScale.hp(20),
      }}>
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
        <Text style={{color: colors.primary.green}}>+Apply Leave</Text>
      </TouchableOpacity>

      <Text style={{marginTop: pxScale.hp(10), marginBottom: pxScale.hp(5)}}>
        Upcoming Leave
      </Text>
      {upcomingLeave.map(item => {
        return <CardItemDate date={item.date} dateType={item.type} />;
      })}
      <Text style={{marginTop: pxScale.hp(10), marginBottom: pxScale.hp(5)}}>
        Upcoming Public Holiday
      </Text>
      {upcomingPublicHoliday.map(item => {
        return <CardItemDate date={item.date} dateType={item.type} />;
      })}
      <View
        style={{
          marginBottom: pxScale.wp(20),
          marginHorizontal: pxScale.hp(5),
        }}>
        <View style={styles.shawdowHighlights}>
          <View style={styles.tabHighlightsContainer}>
            <TouchableOpacity onPress={switchTab}>
              <View
                style={
                  tabPicked === 'highlights' ? styles.tabPicked : styles.tab
                }>
                <Text
                  style={
                    tabPicked === 'highlights' ? styles.textPicked : styles.text
                  }>
                  Highlights
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={switchTab}>
              <View
                style={tabPicked === 'details' ? styles.tabPicked : styles.tab}>
                <Text
                  style={
                    tabPicked === 'details' ? styles.textPicked : styles.text
                  }>
                  Full Details
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {leaveHighlight.map(item => {
        return (
          <CardItemLeave
            leaveTitle={item.leaveTitle}
            sourceIcon={item.sourceIcon}
            colorBorder={item.colorBorder}
            takenNum={item.takenNum}
            balNum={item.balNum}
            balText={item.balText}
            fromDate={item.fromDate}
            toDate={item.toDate}
            percent={item.percent}
          />
        );
      })}

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AppImageSvg
          source={AppIcon.iconGreenCalendar}
          height={pxScale.hp(20)}
          width={pxScale.wp(20)}
        />
        <Text
          style={{
            color: colors.primary.green,
            marginLeft: pxScale.wp(10),
            fontFamily: fontFamily.InterBold,
          }}>
          Leave Calendar
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: pxScale.hp(20),
        }}>
        <PickerBox
          arr={selectedWorkLocation}
          onPress={() => setStateModalWorkLocation(true)}
        />
        <PickerBox
          arr={selectedMajor}
          onPress={() => setStateModalMajor(true)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: pxScale.hp(10),
        }}>
        <CheckBox onValueChange={onCheckViewAllEmployee} />
        <Text style={{marginLeft: pxScale.wp(8)}}>View All Employee</Text>
      </View>
      {
        <WeekPicker
          time={currentDate}
          onPressLeft={BackToPreviousWeek}
          onPressRight={MoveToNextWeek}
        />
      }
      {<LeavesTaken listLeaveTaken={listLeaveTaken} />}

      {stateModalWorkLocation && (
        <MultiWorkLocationModal
          data={listWorkLocation}
          isVisible={stateModalWorkLocation}
          onPressClose={() => setStateModalWorkLocation(false)}
          setPickedItems={setSelectedWorkLocation}
          checkedWorkLocation={checkedWorkLocation}
        />
      )}
      {stateModalMajor && (
        <MultiWorkLocationModal
          data={listMajor}
          isVisible={stateModalMajor}
          onPressClose={() => setStateModalMajor(false)}
          setPickedItems={setSelectedMajor}
          checkedWorkLocation={checkedMajor}
        />
      )}
    </View>
  );
};
export default React.memo(LeaveFooter);
